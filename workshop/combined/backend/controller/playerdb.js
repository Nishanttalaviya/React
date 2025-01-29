
const p1 = require("../dbconnections/postgreesdb");
const c1 = p1.connectionObj();

const funct1 = (req, res)=>{
    console.log("Function 1 called");
    res.send("Function 1 respons");

};


// const funct2 = (req,res) => {
//     console.log("Function 2 called");
//     res.send("Function 2 responsed");
// };

const funct3 =  (req, res) => {
    let v1 = req.body.var1;
    let v2 = req.body.var2;
    let v3 = req.body.var3;
  
    try {
      // Directly execute the query with dynamic data
      const result =  c1.query(
        "INSERT INTO public.player1 (pl_nm, pl_run, pl_country) VALUES ($1, $2, $3) RETURNING *;",
        [v1, v2, v3],
        (error, result) => {
          console.log(result.rows);
          if (error) {
            console.error("Database error:", error);
            res.status(500).send("Internal Server Error");
          } else {
            console.log("Player data inserted successfully:", result.rows[0]);
            res.status(201).send("Player data inserted successfully");
          }
        }
      );
    } catch (error) {
      console.error("Database error:", error);
      res.status(500).send("Internal Server Error");
    }
  };


const funct4 = (req,res) => {
    // INSERT INTO public.player1( pl_id, pl_nm, pl_run, pl_country)VALUES (?, ?, ?, ?);
    try{
            c1.query(
               " SELECT * FROM public.player1"
               ,(error,result) =>{
                console.log(result);
                if(error) console.log(error)
                else{
                    console.log("insert player data succewssfully");
                    res.send(result.rows);    
                }    
               } );
    }
    catch{
        console.log("Error in function");
        res.status(500).send("Internal Server Error");
    }
}


module.exports = {
    funct1,
    // funct2,
    funct3,
    funct4

};