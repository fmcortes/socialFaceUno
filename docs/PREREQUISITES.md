# Prerequisites

## Overview of Required Software

Prior to getting started with cloning the repo, you need to make sure a few technologies are installed. If you are familiar with these tools, feel free to install and move on to the [getting started section](./GETTING_STARTED.md). Otherwise there are more detailed instructions in the "OS Specific Installation Instructions" section below.

### Git

Git is our source control software of choice.

Installation methods:
- It is included on a Mac.
- Windows users can download git [here](https://git-scm.com/downloads).


### Node version 16

Used to install dependencies, run builds, and provide command line tools.

Installation methods:
- Use Homebrew on Mac (preferred)
- [Download and install Node.js 16](https://nodejs.org/download/release/v16.20.2/) - Select the appropriate version for your OS

## OS Specific Installation Instructions

### Windows

For Git, Node.js, download and install the latest versions of each from the sites listed above.

_Note: This section is obviously sparse. If a Windows user would be interested in helping flesh this out, it would be much appreciated._

### Mac

#### Enable developer features

Before you install anything you will need to enable developer features. To do so run this in a terminal.

```
xcode-select --install
```

#### Git

After 

#### Homebrew

We use Homebrew to install many of the required packages as it makes keeping them up-to-date easier. Follow the instructions [from the Homebrew website](https://brew.sh/).

##### Install Node.js
```
brew install node@16
```

To confirm that you have both `node` and `npm` commands installed please run these two commands.

```
node -v
npm -v
```

The version number for each command should print out.


#### NVM
 We use NVM to install different versions of node

```
brew install nvm
```


Add the following lines to your shell profile file (e.g., ~/.bashrc, ~/.zshrc, or ~/.bash_profile):

```
export NVM_DIR=~/.nvm
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
```
Restart your terminal 

Verigy that NVM is installed by running:
```
nvm --version
```

Run the following command to use the version provide it in the repository

```
nvm use
```