import SQLite from 'react-native-sqlite-storage';
SQLite.DEBUG(true);
SQLite.enablePromise(true);

export async function InitalDataBase() {
    const db = await SQLite.openDatabase('popular.db');
    db.transaction(
        tx => {
          tx.executeSql("CREATE table if not exists popular ( Id INTEGER PRIMARY KEY AUTOINCREMENT,pop_id INTEGER, name VARCHAR (50),known_for_department VARCHAR (50),popularity VARCHAR (50),profile_path VARCHAR (50))");
        }
      )
}


export async function InserIntoDb(SqlStatement, DataToINsert) {
    let DataResult = ''
    const db = await SQLite.openDatabase('popular.db');
    await (db.transaction(
        tx => {
            tx.executeSql(SqlStatement, DataToINsert, (tx, results) => {
                if (results.rowsAffected > 0) {
                    DataResult = 'Success'
                } else {
                    DataResult = 'failed'
                }
            });
        }))
    return DataResult
}

export async function SelectFromDb(SqlStatement) {
    let DataResult = []
    const db = await SQLite.openDatabase('popular.db');
    await (db.transaction(
        tx => {
            tx.executeSql(SqlStatement, [], (tx, results) => {
                for (let i = 0; i < results.rows.length; i++) {
                    DataResult.push(results.rows.item(i))
                }
            });
        }))
    return DataResult
}