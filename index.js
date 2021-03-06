const fs = require('fs');
const inquirer = require('inquirer');
const template = require('./template.js');

inquirer.prompt([
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'Provide a short description?',
        name: 'description'
    },
    {
        type: 'input',
        message: 'How is your project installed?',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'How is your project used?',
        name: 'usage'
    },
    {
        type: 'list',
        message: 'What licencse do you want?',
        name: 'license',
        choices: ['Academic Free License v3.0', 'Apache license 2.0',
        'Artistic license 2.0', 'Boost Software License 1.0', 'BSD 2-clause "Simplified" license',
        'BSD 3-clause "New" or "Revised" license', 'BSD 3-clause Clear license', ''
    ]   
    },
    {
        type: 'input',
        message: 'Explain how others can contribute.',
        name: 'contributing'
    },
    {
        type: 'input',
        message: 'How to test your project?',
        name: 'tests'
    },
    {
        type: 'input',
        message: 'What is your github?',
        name: 'git'
    },
    {
        type: 'input',
        message: 'Whats your email?',
        name: 'email'
    }

]).then((response) => {
    const attempt = template.readME(response)
    fs.writeFile('README.md', `${attempt}`, (err) => err ? console.error(err) : console.log('Commit logged!'))
})





// afl-3.0
// apache-2.0
// artistic-2.0
// bsl-1.0
// bsd-2-clause
// bsd-3-clause
// bsd-3-clause-clear
// Creative Commons license family	cc
// Creative Commons Zero v1.0 Universal	cc0-1.0
// Creative Commons Attribution 4.0	cc-by-4.0
// Creative Commons Attribution Share Alike 4.0	cc-by-sa-4.0
// Do What The F*ck You Want To Public License	wtfpl
// Educational Community License v2.0	ecl-2.0
// Eclipse Public License 1.0	epl-1.0
// Eclipse Public License 2.0	epl-2.0
// European Union Public License 1.1	eupl-1.1
// GNU Affero General Public License v3.0	agpl-3.0
// GNU General Public License family	gpl
// GNU General Public License v2.0	gpl-2.0
// GNU General Public License v3.0	gpl-3.0
// GNU Lesser General Public License family	lgpl
// GNU Lesser General Public License v2.1	lgpl-2.1
// GNU Lesser General Public License v3.0	lgpl-3.0
// ISC	isc
// LaTeX Project Public License v1.3c	lppl-1.3c
// Microsoft Public License	ms-pl
// MIT	mit
// Mozilla Public License 2.0	mpl-2.0
// Open Software License 3.0	osl-3.0
// PostgreSQL License	postgresql
// SIL Open Font License 1.1	ofl-1.1
// University of Illinois/NCSA Open Source License	ncsa
// The Unlicense	unlicense
// zLib License