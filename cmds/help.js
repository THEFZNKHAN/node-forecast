const menus = {
  main: `
      node-forecast [command] <options>
  
      today .............. show weather for today
      version ............ show package version
      help ............... show help menu for a command
      `,

  today: `
      node-forecast today <options>
  
      --location, -l ..... the location to use
      `,
  forecast: `
        node-forecast forecast <options>

        --location, -l ..... the location to use
        `,
};

module.exports = (args) => {
  const subCmd = args._[0] === "help" ? args._[1] : args._[0];

  console.log(menus[subCmd] || menus.main);
};
