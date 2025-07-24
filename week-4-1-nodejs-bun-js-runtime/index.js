const fs = require('fs');
const { Command } = require('commander');
const program = new Command();

program
    .name('word-counter')
    .description('CLI to count number of words in a given file')
    .version('0.1.0');

program.command('counter')

    .description('counts number of word of the file')
    .argument('<file>', 'file to count words')
    .action((file) => {
        fs.readFile(file, "utf-8", (err, data) => {
            if (err) {
                console.error(err)
            }
            else {
                let words = data.split(/\s+/);
                let numberOfWords = words.filter(word => word.length > 0).length;

                console.log(`Your ${file} file has ${numberOfWords}`)
            }
        })
    });

program.parse()