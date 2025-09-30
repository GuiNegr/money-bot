import mysql from 'mysql2'
import dotenv from 'dotenv';
dotenv.config();

export class FinancialRepository{
    
    async save(financialAsset){
        let con = await this.connectWithDatabase()

        try {
            const sql = "INSERT INTO financial_asset(type, name, amount) VALUES (?,?,?)";
            const values = [financialAsset.type, financialAsset.name, financialAsset.value];
            con.query(sql, values);
        } catch (err) {
            console.error('Erro ao inserir registro:', err);
            throw err;
        } finally {
            con.end();  
        }
    }


    async getAlldata(){
        let con = await this.connectWithDatabase()
        con.connect(function(err) {
            if (err) throw err;
            con.query("SELECT * FROM financial_asset", function (err, result, fields) {
                if (err) throw err;
                console.log(result);
            });
        });
    }


     async connectWithDatabase(){
        return mysql.createConnection({
            host: process.env.HOSTDB,
            user: process.env.USERBD,
            password: process.env.PASSWORDBD,
            database: process.env.DB,
        })
    }

}