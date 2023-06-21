const Pool = require('pg/lib').Pool;
const pool = new Pool({
    user: 'postgres', 
    host: 'localhost', 
    database: 'employee', 
    password: 'iamttyller', 
    port: 5432
});

const getEmployees = (req,res) =>{
    pool.query('SELECT * FROM employee;', (error,results)=>{
        if(error){
            throw error;
        }
        res.status(200).json(results.rows)
    });
};

const addEmployee = (req,res)=>{
    try {
        const {
            id,employee_name, employee_id,date_hired,city_id
        } = req.body
        pool.query(
            `INSERT INTO employee (id, employee_name, employee_id, date_hired, city_id) VALUES ($1,$2,$3,$4,$5) RETURNING *;`,
            [id,employee_name, employee_id,date_hired,city_id],
            (error, results)=>{
                if(error){
                    console.log(error, '<---error here')
                    throw error;
                }
                console.log(results,'<--- results')
                res.status(200).json(results.rows);
            }
        )
    } catch(error){
        throw error
    }
}

const deleteEmployee = (req,res)=>{
    const id = parseInt(req.params.id)
    pool.query(`DELETE FROM employee WHERE id = ${id};`, (error, results)=>{
        if(error){
            throw error;
        }
        res.status(200).json(results.rows);
    });
};

const getEmployee = (req,res)=>{
    const {id} = req.body;
    pool.query(`SELECT * FROM employee WHERE id=$1;`,[id], async (error,results)=>{
        if(error){
            throw error;
        }
        res.status(200).json(results.rows);
        return results.rows
    });
};

const updateEmployee = (req,res)=>{
    let {id,employee_name, employee_id,date_hired,city_id} = req.body;
    let myPromise = new Promise(function(resolve,reject){
        pool.query(`SELECT * FROM employee WHERE id=$1;`,[id], (error,results)=>{
            if(error){
                throw error;
            } else if(res){
                employee_name = employee_name !== undefined ? employee_name : results.rows.employee_name;
                employee_id = employee_id !== undefined ? employee_id : results.rows.employee_id;
                date_hired = date_hired !== undefined ? date_hired : results.rows.date_hired;
                city_id = city_id !== undefined ? city_id : results.rows.city_id;
                resolve(results.rows)
                return results.rows
            } else {
                reject()
            }
        })
    });
    myPromise.then(()=>{
        try {
            pool.query (
                `UPDATE employee
                SET employee_name=$1, employee_id=$2, date_hired=$3, city_id=$4
                WHERE id=$5;`,
                [employee_name, employee_id, date_hired, city_id, id],
                (error, results)=>{
                    if(error){
                        console.log(error, '<--- error here')
                        throw error;
                    }
                    console.log(results, '<--- result')
                    res.status(200).json(results.rows)
                }
            );
        } catch(error){
            throw error;
        }
    })
};

module.exports = {
    getEmployees,
    addEmployee,
    deleteEmployee,
    updateEmployee,
    getEmployee
}