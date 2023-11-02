const resolvers = {
  Query: {
    hello: () => {
      // to break the backend
      console.log("hello docker")
      let sum = sum + inputNumber;
      
      return "Hello world!";
      
    },
  },
};

module.exports = resolvers;
