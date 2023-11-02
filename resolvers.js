const resolvers = {
  Query: {
    hello: () => {
      // to break the backend
      let sum = sum + inputNumber;
      return "Hello world!";
      
    },
  },
};

module.exports = resolvers;
