export const Endpoints = {
    getTasks: "/api/tasks",
    getTask: "/api/tasks/",
    createTask: "/api/tasks/create",
    updateTask: "/api/tasks/update",
    deleteTask: "/api/tasks/delete/",


    getDailyTasks: "/api/daily-tasks",
    getDailyTask: "/api/daily-tasks/",
    createDailyTask: "/api/daily-tasks/create",
    updateDailyTask: "/api/daily-tasks/update",
    deleteDailyTask: "/api/daily-tasks/delete/",

    getUsers: "/api/users",
    getUser: "/api/users/",
    createUser: "/api/users/create",
    updateUser: "/api/users/",
    deleteUser: "/api/users/delete/",

    getProject: "/api/projects/",
    getProjects: "/api/projects",
    createProject: "/api/projects/create",
    updateProject: "/api/projects/update",
    deleteProject: "/api/projects/delete/",


    login: "/api/auth/login",
    register: "/api/auth/register",
    forgotPassword: "/api/auth/forgot-password",
    resetPassword: "/api/auth/reset-password",
    me: "/api/auth/me",
    refresh: "/api/auth/refresh",
    logout: "/api/auth/logout",
}

export const BackendUrl = "http://localhost:8080"