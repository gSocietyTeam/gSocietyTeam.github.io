define({ "api": [
  {
    "type": "delete",
    "url": "/announces/:id",
    "title": "Delete an existing announce",
    "name": "DeleteAnnounce",
    "group": "Announce",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Messaggio di avvenuta eliminazione.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/announce.js",
    "groupTitle": "Announce"
  },
  {
    "type": "get",
    "url": "/announces/:id",
    "title": "Get a particular announce",
    "name": "GetAnnounce",
    "group": "Announce",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Announce",
            "optional": false,
            "field": "announce",
            "description": "<p>Announce.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "announce.id",
            "description": "<p>Id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "announce.message",
            "description": "<p>Message</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "announce.priority",
            "description": "<p>Priority</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "announce.UserId",
            "description": "<p>UserId</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/announce.js",
    "groupTitle": "Announce"
  },
  {
    "type": "get",
    "url": "/announces/",
    "title": "Get all announces",
    "name": "GetAnnounces",
    "group": "Announce",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Announce[]",
            "optional": false,
            "field": "announces",
            "description": "<p>List of Announces.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "announces.id",
            "description": "<p>Id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "announces.message",
            "description": "<p>Message</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "announces.priority",
            "description": "<p>Priority</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "announces.UserId",
            "description": "<p>UserId</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/announce.js",
    "groupTitle": "Announce"
  },
  {
    "type": "post",
    "url": "/announces/",
    "title": "Create a new announce",
    "name": "PostAnnounce",
    "group": "Announce",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Message of the Announce.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "priority",
            "description": "<p>Priority of the Announce.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Announce",
            "optional": false,
            "field": "announce",
            "description": "<p>Announce</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "announce.id",
            "description": "<p>Id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "announce.message",
            "description": "<p>Message</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "announce.priority",
            "description": "<p>Priority</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "announce.UserId",
            "description": "<p>UserId</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/announce.js",
    "groupTitle": "Announce"
  },
  {
    "type": "put",
    "url": "/announces/:id",
    "title": "Update an existing announce",
    "name": "PutAnnounce",
    "group": "Announce",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Message of the Announce.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "priority",
            "description": "<p>Priority of the Announce.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Announce",
            "optional": false,
            "field": "announce",
            "description": "<p>Announce</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "announce.id",
            "description": "<p>Id</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "announce.message",
            "description": "<p>Message</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "announce.priority",
            "description": "<p>Priority</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "announce.UserId",
            "description": "<p>UserId</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/announce.js",
    "groupTitle": "Announce"
  },
  {
    "type": "post",
    "url": "/auth/login",
    "title": "Login",
    "name": "Login",
    "group": "Auth",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "token",
            "description": "<p>JWT Login Token.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/auth.js",
    "groupTitle": "Auth"
  },
  {
    "type": "delete",
    "url": "/isles/:id",
    "title": "Delete an existing isle",
    "name": "DeleteIsle",
    "group": "Isle",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Messaggio di avvenuta eliminazione.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/isle.js",
    "groupTitle": "Isle"
  },
  {
    "type": "get",
    "url": "/isles/:id",
    "title": "Get a particular isle",
    "name": "GetIsle",
    "group": "Isle",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Isle",
            "optional": false,
            "field": "isle",
            "description": "<p>Isle.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/isle.js",
    "groupTitle": "Isle"
  },
  {
    "type": "get",
    "url": "/isles/",
    "title": "Get all isles",
    "name": "GetIsles",
    "group": "Isle",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Isle[]",
            "optional": false,
            "field": "announces",
            "description": "<p>List of Isles.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/isle.js",
    "groupTitle": "Isle"
  },
  {
    "type": "post",
    "url": "/isles/",
    "title": "Create a new isle",
    "name": "PostIsle",
    "group": "Isle",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Isle",
            "optional": false,
            "field": "isle",
            "description": "<p>Isle</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/isle.js",
    "groupTitle": "Isle"
  },
  {
    "type": "put",
    "url": "/isles/:id",
    "title": "Update an existing isle",
    "name": "PutIsle",
    "group": "Isle",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Isle",
            "optional": false,
            "field": "isle",
            "description": "<p>Isle</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/isle.js",
    "groupTitle": "Isle"
  },
  {
    "type": "delete",
    "url": "/tasks/:id",
    "title": "Delete an existing task",
    "name": "DeleteTask",
    "group": "Task",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Messaggio di avvenuta eliminazione.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/task.js",
    "groupTitle": "Task"
  },
  {
    "type": "get",
    "url": "/tasks/:id",
    "title": "Get a particular task",
    "name": "GetTask",
    "group": "Task",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Task",
            "optional": false,
            "field": "task",
            "description": "<p>Task.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "task.id",
            "description": "<p>Id</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "task.date",
            "description": "<p>Date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "task.wasteType",
            "description": "<p>Tipo materiale (R1/Raw Material)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "task.notes",
            "description": "<p>Note sulla task</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "task.type",
            "description": "<p>Tipo della task (IN/OUT --&gt; Entrata oppure Uscita)</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "task.completed",
            "description": "<p>Stato della task</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "task.hour",
            "description": "<p>Orari da consegnare la task</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/task.js",
    "groupTitle": "Task"
  },
  {
    "type": "get",
    "url": "/tasks/",
    "title": "Get all tasks",
    "name": "GetTasks",
    "group": "Task",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Task[]",
            "optional": false,
            "field": "task",
            "description": "<p>List of Tasks.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "task.id",
            "description": "<p>Id</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "task.date",
            "description": "<p>Date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "task.wasteType",
            "description": "<p>Tipo materiale (R1/Materiale Grezzo)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "task.notes",
            "description": "<p>Note sulla task</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "task.type",
            "description": "<p>Tipo della task (IN/OUT --&gt; Entrata oppure Uscita)</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "task.completed",
            "description": "<p>Stato della task</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "task.hour",
            "description": "<p>Orari da consegnare la task</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/task.js",
    "groupTitle": "Task"
  },
  {
    "type": "get",
    "url": "/tasks/complteded",
    "title": "Get all the completed tasks",
    "name": "GetTasksCompleted",
    "group": "Task",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Task[]",
            "optional": false,
            "field": "task",
            "description": "<p>List of Tasks.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "task.id",
            "description": "<p>Id</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "task.date",
            "description": "<p>Date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "task.wasteType",
            "description": "<p>Tipo materiale (R1/Materiale Grezzo)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "task.notes",
            "description": "<p>Note sulla task</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "task.type",
            "description": "<p>Tipo della task (IN/OUT --&gt; Entrata oppure Uscita)</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "task.completed",
            "description": "<p>Stato della task</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "task.hour",
            "description": "<p>Orari da consegnare la task</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/task.js",
    "groupTitle": "Task"
  },
  {
    "type": "post",
    "url": "/tasks/",
    "title": "Create a new task",
    "name": "PostTask",
    "group": "Task",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>Date of the Task.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "IsleId",
            "description": "<p>Id of the Isle.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "wasteType",
            "description": "<p>Waste type (R1--R6/Raw Material).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Task type (IN/OUT).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "notes",
            "description": "<p>Notes of the task.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "hour",
            "description": "<p>Orario da consegnare la task (09.00-19.00)</p>"
          },
          {
            "group": "Success 200",
            "type": "Task",
            "optional": false,
            "field": "task",
            "description": "<p>Task.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "task.id",
            "description": "<p>Id</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "task.date",
            "description": "<p>Date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "task.wasteType",
            "description": "<p>Tipo materiale (R1/Raw Material)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "task.notes",
            "description": "<p>Note sulla task</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "task.type",
            "description": "<p>Tipo della task (IN/OUT --&gt; Entrata oppure Uscita)</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "task.completed",
            "description": "<p>Stato della task</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "task.hour",
            "description": "<p>Orari da consegnare la task</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/task.js",
    "groupTitle": "Task"
  },
  {
    "type": "put",
    "url": "/announces/:id",
    "title": "Update an existing announce",
    "name": "PutTask",
    "group": "Task",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Date",
            "optional": false,
            "field": "date",
            "description": "<p>Date of the Task.</p>"
          },
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "IsleId",
            "description": "<p>Id of the Isle.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "wasteType",
            "description": "<p>Waste type (R1--R6/Raw Material).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>Task type (IN/OUT).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "notes",
            "description": "<p>Notes of the task.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "hour",
            "description": "<p>Orario da consegnare la task (09.00-19.00)</p>"
          },
          {
            "group": "Success 200",
            "type": "Task",
            "optional": false,
            "field": "task",
            "description": "<p>Task.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "task.id",
            "description": "<p>Id</p>"
          },
          {
            "group": "Success 200",
            "type": "Date",
            "optional": false,
            "field": "task.date",
            "description": "<p>Date</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "task.wasteType",
            "description": "<p>Tipo materiale (R1/Raw Material)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "task.notes",
            "description": "<p>Note sulla task</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "task.type",
            "description": "<p>Tipo della task (IN/OUT --&gt; Entrata oppure Uscita)</p>"
          },
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "task.completed",
            "description": "<p>Stato della task</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "task.hour",
            "description": "<p>Orari da consegnare la task</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/task.js",
    "groupTitle": "Task"
  },
  {
    "type": "delete",
    "url": "/users/:id",
    "title": "Delete an existing user",
    "name": "DeleteUser",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Messaggio di avvenuta eliminazione.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/users/drivers",
    "title": "Get a list of users who are drivers",
    "name": "GetDrivers",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "User[]",
            "optional": false,
            "field": "user",
            "description": "<p>User who is a Driver.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/users/:id",
    "title": "Get a particular user",
    "name": "GetUser",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "User",
            "optional": false,
            "field": "user",
            "description": "<p>User.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/tasks/",
    "title": "Get all users",
    "name": "GetUsers",
    "group": "User",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "User[]",
            "optional": false,
            "field": "user",
            "description": "<p>List of Users.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "User"
  },
  {
    "type": "post",
    "url": "/users/",
    "title": "Create a new user",
    "name": "PostUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>Firstname of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>Lastname of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>Password of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>(ADMIN/DRIVER -&gt; Default Driver).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "User",
            "optional": false,
            "field": "user",
            "description": "<p>User</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "User"
  },
  {
    "type": "put",
    "url": "/users/:id",
    "title": "Update an existing user",
    "name": "PutUser",
    "group": "User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>Username of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "firstName",
            "description": "<p>Firstname of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "lastName",
            "description": "<p>Lastname of the user.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "role",
            "description": "<p>(ADMIN/DRIVER -&gt; Default Driver).</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "User",
            "optional": false,
            "field": "user",
            "description": "<p>User</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "User"
  },
  {
    "type": "delete",
    "url": "/vehicles/:id",
    "title": "Delete an existing vehicle",
    "name": "DeleteVehicle",
    "group": "Vehicle",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "msg",
            "description": "<p>Messaggio di avvenuta eliminazione.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/vehicle.js",
    "groupTitle": "Vehicle"
  },
  {
    "type": "get",
    "url": "/vehicles/:id",
    "title": "Get a particular vehicle",
    "name": "GetVehicle",
    "group": "Vehicle",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Vehicle",
            "optional": false,
            "field": "vehicle",
            "description": "<p>Vehicle.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/vehicle.js",
    "groupTitle": "Vehicle"
  },
  {
    "type": "get",
    "url": "/vehicles/",
    "title": "Get all vehicles",
    "name": "GetVehicles",
    "group": "Vehicle",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Vehicle[]",
            "optional": false,
            "field": "vehicle",
            "description": "<p>List of Vehicles.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/vehicle.js",
    "groupTitle": "Vehicle"
  },
  {
    "type": "post",
    "url": "/vehicles/",
    "title": "Create a new vehicle",
    "name": "PostVehiicle",
    "group": "Vehicle",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "owner",
            "description": "<p>owner of the vehicle</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>type of the vehicle</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "telonato",
            "description": "<p>telonato of the vehicle</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "adr",
            "description": "<p>adr of the vehicle</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "euro",
            "description": "<p>euro of the vehicle</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "buyDate",
            "description": "<p>buyDate of the vehicle</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "buyValue",
            "description": "<p>buyValue of the vehicle</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "booklet",
            "description": "<p>booklet of the vehicle</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "revisionExpire",
            "description": "<p>revisionExpire of the vehicle</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "revisionFrequence",
            "description": "<p>revisionFrequence of the vehicle</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cronoTachigraphExpire",
            "description": "<p>cronoTachigraphExpire of the vehicle</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "attestazione",
            "description": "<p>attestazione of the vehicle</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "revisioneEstintori",
            "description": "<p>revisioneEstintori of the vehicle</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bolloExpire",
            "description": "<p>bolloExpire of the vehicle</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "polizzaExpire",
            "description": "<p>polizzaExpire of the vehicle</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "assicurazioneFrequence",
            "description": "<p>assicurazioneFrequence of the vehicle</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "CT_CP",
            "description": "<p>CT_CP of the vehicle</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "assicurazione",
            "description": "<p>assicurazione of the vehicle</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "compagnia",
            "description": "<p>compagnia of the vehicle</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "importo",
            "description": "<p>importo of the vehicle</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "franchigia",
            "description": "<p>franchigia of the vehicle</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "note",
            "description": "<p>note of the vehicle</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "responsabile",
            "description": "<p>responsabile of the vehicle</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Vehicle",
            "optional": false,
            "field": "vehicle",
            "description": "<p>Vehicle</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/vehicle.js",
    "groupTitle": "Vehicle"
  },
  {
    "type": "put",
    "url": "/vehicles/:id",
    "title": "Update an existing vehicle",
    "name": "PutVehicle",
    "group": "Vehicle",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "owner",
            "description": "<p>owner of the vehicle</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "type",
            "description": "<p>type of the vehicle</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "telonato",
            "description": "<p>telonato of the vehicle</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "adr",
            "description": "<p>adr of the vehicle</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "euro",
            "description": "<p>euro of the vehicle</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "buyDate",
            "description": "<p>buyDate of the vehicle</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "buyValue",
            "description": "<p>buyValue of the vehicle</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "booklet",
            "description": "<p>booklet of the vehicle</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "revisionExpire",
            "description": "<p>revisionExpire of the vehicle</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "revisionFrequence",
            "description": "<p>revisionFrequence of the vehicle</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "cronoTachigraphExpire",
            "description": "<p>cronoTachigraphExpire of the vehicle</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "attestazione",
            "description": "<p>attestazione of the vehicle</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "revisioneEstintori",
            "description": "<p>revisioneEstintori of the vehicle</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "bolloExpire",
            "description": "<p>bolloExpire of the vehicle</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "polizzaExpire",
            "description": "<p>polizzaExpire of the vehicle</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "assicurazioneFrequence",
            "description": "<p>assicurazioneFrequence of the vehicle</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "CT_CP",
            "description": "<p>CT_CP of the vehicle</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "assicurazione",
            "description": "<p>assicurazione of the vehicle</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "compagnia",
            "description": "<p>compagnia of the vehicle</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "importo",
            "description": "<p>importo of the vehicle</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "franchigia",
            "description": "<p>franchigia of the vehicle</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "note",
            "description": "<p>note of the vehicle</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "responsabile",
            "description": "<p>responsabile of the vehicle</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Vehicle",
            "optional": false,
            "field": "vehicle",
            "description": "<p>Vehicle</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "routes/vehicle.js",
    "groupTitle": "Vehicle"
  }
] });
