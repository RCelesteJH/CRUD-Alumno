const controller = {};

controller.list = (req, res) => {
  req.getConnection((err, conn) => {
    conn.query('SELECT * FROM alumnos', (err, alumnos) => {//consulta la base de datos
     if (err) {
      res.json(err);
     }
     res.render('alumnos', { //llama la vista
      data: alumnos
     });
    });
  });
};

controller.save = (req, res) => {
  const data = req.body;
  console.log(req.body)
  req.getConnection((err, connection) => {
    const query = connection.query('INSERT INTO alumnos set ?', data, (err, alumno) => {
      console.log(alumno)
      res.redirect('/');
    })
  })
};

controller.edit = (req, res) => {
  const { id_alumno } = req.params;
  req.getConnection((err, conn) => {
    conn.query("SELECT * FROM alumnos WHERE id_alumno = ?", [id_alumno], (err, rows) => {
      res.render('alumnos_edit', {
        data: rows[0]
      })
    });
  });
};

controller.update = (req, res) => {
  const { id_alumno } = req.params;
  const newalumno = req.body;
  req.getConnection((err, conn) => {
  conn.query('UPDATE alumnos set ? where id_alumno = ?', [newalumno, id_alumno], (err, rows) => {
    res.redirect('/');
  });
  });
};

controller.delete = (req, res) => {
  const { id_alumno } = req.params;
  req.getConnection((err, connection) => {
    connection.query('DELETE FROM alumnos WHERE id_alumno = ?', [id_alumno], (err, rows) => {
      res.redirect('/');
    });
  });
}

module.exports = controller;