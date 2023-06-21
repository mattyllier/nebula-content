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
            name, email_address, age
        } = req.body
        pool.query(
            `INSERT INTO employee (name, email_address, age) VALUES ($1,$2,$3) RETURNING *;`,
            [name, email_address, age],
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
    let {name, email_address, age, id} = req.body;
    let myPromise = new Promise(function(resolve,reject){
        pool.query(`SELECT * FROM employee WHERE id=$1;`,[id], (error,results)=>{
            if(error){
                throw error;
            } else if(res){
                name = name !== undefined ? name : results.rows.name;
                email_address = email_address !== undefined ? email_address : results.rows.email_address;
                age = age !== undefined ? age : results.rows.age;
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
                SET name=$1, email_address=$2, age=$3
                WHERE id=$4;`,
                [name, email_address, age, id],
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