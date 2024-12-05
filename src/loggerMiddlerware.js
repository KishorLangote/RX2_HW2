const loggerMiddleware = (store) => (next) => (action) => {
    console.log("current state:", store.getState())
    console.log("aciton:", action)
    next(action)
    console.log("new state:", store.getState())
}

export default loggerMiddleware