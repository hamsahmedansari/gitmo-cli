# Gitmo-Cli

This is an amazing CLI or you can use as boilerplate for git commit

## Feature

Some Feature are list below...

1. Initialize Git Repository
   - **INIT** Git Repository.
   - Check **readme.md** if not exist create one.
   - Check **.gitignore** if not exist create one.
   - Ask For Your GitHub **Remote**.
   - Add All files.
   - Add Beautiful Git Commit with **EMOJI**.
2. Update Git Repository
   - Add All files to your git.
   - Add Beautiful Git Commit as Update with Special **EMOJI** and add track files as commit description.
3. Remove Files From Git Repository
   - Remove Given Files From Tracking
   - Add Beautiful Git Commit as Remove with Special **EMOJI** and add untracked files as commit description.
4. Fixed Bug Commit.
   - Add All files to your git.
   - Add Beautiful Git Commit as **BUG** Fixed with Special **EMOJI** and add track files as commit description.
5. Update Readme.md
   - Add **readme.md** to your git.
   - Add Beautiful Git Commit as Readme.Update with Special **EMOJI**.
6. Deploy Git Commit - Add All files to your git.
   - Add Beautiful Git Commit as **Deploy** with Special **EMOJI** and add track files as commit description

## Instalation

```
npm i gitmo-cli
```

or

```
yarn add gitmo-cli
```

after that you can use Gitmo-Cli by `gitmo [command] [argu]`

### Help

```
gitmo -h
```

or

```
gitmo
```

![](https://i.imgur.com/mZmPWhO.png)

### Initialized Git Repository

```
gitmo -i
```

it ask for your github repo url with .git extension provide it. and it will create repo with readme.md and .gitignore if not exist then push to your remote server.
**Note :** You can init your working dir.

### Update Git Repository

```
gitmo -u [msg]
```

### Remove From Git Repository

```
gitmo -r [msg] [files]
```

### Fixed Git Commit

```
gitmo -f [msg]
```

### Readme.md Update

```
gitmo -R [msg]
```

### Deploy Update

```
gitmo -d [msg]
```

## Create Your own style commit

You can create your own style commit just edit few files from dir and you can add your own style commit with just one command

### Folder Structure

    .
    ├── lib                             # All helper files
    ├── node_modules
    ├── util                            # All Command Files
        ├── command.js                  # Command Use in gitmo i.e (-i,-h,-p)
        ├── deploy.js                   # Deploy Commit and push to server
        ├── fixed.js                    # Fixed Commit and push to server
        ├── help.js                     # Show Help on Shell
        ├── init.js                     # Init Commit and push to server
        ├── log.js                      # Log helper File
        ├── readme.js                   # Readme Commit and push to server
        ├── remove.js                   # Remove Commit and push to server
        ├── update.js                   # Update Commit and push to server
        └── emoji.js                    # All Emoji lives here

    ├── index.js                        # Starter Point
    ├── package-lock.json
    ├── readme.md
