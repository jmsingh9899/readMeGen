
function readME(d) {

    tag = d.license.split(' ').join()
return(
`
# ${d.title} #
![License: ${d.license}](https://img.shields.io/badge/${tag}-<yeeet>)



## [Description](#description)
${d.description}

## [Table of Contents](#table-of-contents)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [How to contribute](#contributing)
* [Tests](#tests)
* [Questions](#questions)


## [Installation](#installation) 
${d.installation}  

## [Usage](#usage)
${d.usage}

## [License](#license)
${d.license}

## [Contributing](#contributing)
${d.contributing}

## [Tests](#tests)
${d.tests}

## [Questions](#questions)
If you have ant further questions I can be reached at:

[${d.git}](https://github.com/${d.git})

${d.email}

    `)
}

module.exports = {
    readME
}