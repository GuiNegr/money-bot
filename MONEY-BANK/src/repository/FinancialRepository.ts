import mysql, { Connection,RowDataPacket } from "mysql2/promise";
import { FinancialAsset } from "../model/FinancialAsset";
import dotenv from "dotenv";
import { FinancialRepositoryException } from "../exception/FinancialRepositoryException";
dotenv.config();



export class FinancialRepository {

    private async connectWithDatabase(): Promise<Connection> {
    const host = process.env.HOSTDB;
    const user = process.env.USERBD;
    const password = process.env.PASSWORDBD;
    const database = process.env.DB;



    if (!host || !user || !password || !database) {
        throw new Error("Alguma variável de ambiente do banco não está definida!");
    }

    return mysql.createConnection({
        host,
        user,
        password,
        database,
    });

    }



//oque preciso modificar nesse save futuramente, preciso adicionar um check de se aquele valor do nome 
    async save(financialAsset: FinancialAsset): Promise<void> {
        const con = await this.connectWithDatabase();

        try {
            const sql = "INSERT INTO financial_asset(type, name, amount,quantity,ticker) VALUES (?,?,?,?,?)";
            const values = [financialAsset.type, financialAsset.name, financialAsset.amount,financialAsset.quanity,financialAsset.ticker];
            await con.execute(sql, values); 
        } catch (err) {
            throw new FinancialRepositoryException(String(err + " the error has ocurred in save function "))
        } finally {
            await con.end();
        }
    }

        async updateTickerValue(tickerName: string,newValue : number): Promise<void> {
        const con = await this.connectWithDatabase();

        try {
            const sql = "UPDATE financial_asset SET amount = ?  WHERE TICKER = ?";
            const values = [newValue,tickerName];
            await con.execute(sql, values); 
        } catch (err) {
            throw new FinancialRepositoryException(String(err + " the error has ocurred in updateTickerValue function "))
        } finally {
            await con.end();
        }
    }


     async getAllData(): Promise<any> {
        const con = await this.connectWithDatabase();
        try {
            const [rows] = await con.query<RowDataPacket[]>("SELECT * FROM financial_asset");
            return rows.map(row => ({
                type: row.type,
                name: row.name,
                value: row.amount, 
            }));
        }catch (err) {
            throw new FinancialRepositoryException(String(err + " the error has ocurred in getAllData function "))
        } finally {
            await con.end();
        }
    }

     async getFinancialAssetByTicker(ticker:String): Promise<number>{
            const connection = await this.connectWithDatabase();

            try{
                const SQL = "SELECT * FROM financial_asset where ticker = ?"
                const [rows] = await connection.execute<RowDataPacket[]>(SQL, [ticker]);                
                const id = Number(rows[0]?.id) || 0;            
                return id
            }catch(err){
                throw new FinancialRepositoryException(String(err + " the error has ocurred in getFinancialAssetByTicker function "))
            }finally{
                await connection.end();
            } 
    }

    
       async getTickerInBdAndReturn(ticker:string): Promise<any>{
            const connection = await this.connectWithDatabase();

            try{
                const SQL = "SELECT * FROM financial_asset where ticker = ?"
                const [rows] = await connection.execute<RowDataPacket[]>(SQL, [ticker]);                
                const information = rows[0] || 0;
                return information;            
            }catch(err){
                throw new FinancialRepositoryException(String(err + " the error has ocurred in getFinancialAssetByTicker function "))
            }finally{
                await connection.end();
            } 
    }
}
