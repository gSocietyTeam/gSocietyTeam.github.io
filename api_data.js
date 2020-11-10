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
  }
] });
