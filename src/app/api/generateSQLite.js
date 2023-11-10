const { exec } = require('child_process');

module.exports = async (req, res) => {
  exec('pnpm drizzle-kit generate:sqlite', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error.message}`);
      res.status(500).send('Error running command');
      return;
    }
    if (stderr) {
      console.error(`stderr: ${stderr}`);
      res.status(500).send('Error in command execution');
      return;
    }
    console.log(`stdout: ${stdout}`);
    res.status(200).send('Command executed successfully');
  });
};
