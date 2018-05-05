<h1 align="center">
  <img src="https://on.ahmda.ws/pXeE/c" />

  Emoji Log by Ahmad Awais
</h1>

After producing [hundreds of open source software](https://github.com/ahmadawais) I've ended up inventing a git commit log standard that I really like. I call it, Emoji Log.

<br />

![Philosophy](https://on.ahmda.ws/orq5/c)

### Philosophy

I like emoji. I like ’em a lot. Programming, code, geeks/nerds, open source, all of that is inherently dull and sometimes boring. Emoji (which is, in fact, the plural of emoji) helps me add colors and emotions to the mix. Nothing bad if you want to add emotions to this 2D flat text-based world of code. I found out that instead of memorizing [hundreds of emoji](https://gitmoji.carloscuesta.me/) it's better to keep the categories small and general.


1. **IMPERATIVE** ↓
	- Make your Git commit messages imperative.
	- Write commit message like you're giving an order.
	- E.g. Use ✅ `Add` instead of ❌ `Added`.
	- E.g. Use ✅ `Create` instead of ❌ `Creating`.
1. **RULES** ↓
	- Small number of categories — easy to memorize.
	- Nothing more nothing less.
	- E.g. `📦 NEW`,`👌 IMPROVE`,`🐛 FIX`,`📖 DOC`,`🚀 RELEASE`, and `✅ TEST`
1. **ACTIONS** ↓
	- Make git commits based on actions you take.
	- Use a good editor like [VSCode](https://code.visualstudio.com/) to commit the right files with commit messages.
<br />


![Start](https://on.ahmda.ws/osd3/c)

### GETTING STARTED!

Only use the following Git Commit Messages. Simple and small foot print is the key here.

1. `📦 NEW: IMPERITIVE_MESSAGE_GOES_HERE`
	> Use when you add something completely new.
	> E.g. `📦 NEW: Add Git ignore file`

1. `👌 IMPROVE: IMPERITIVE_MESSAGE_GOES_HERE`
	> Use when you improve/enhance piece of code like refactoring etc.
	> E.g. `👌 IMPROVE: Remote IP API Function`

1. `🐛 FIX: IMPERITIVE_MESSAGE_GOES_HERE`
	> Use when you fix a bug — need I say more?
	> E.g. `🐛 FIX: Case convertor`

1. `📖 DOC: IMPERITIVE_MESSAGE_GOES_HERE`
	> Use when you add documentation like `README.md`, or even inline docs.
	> E.g. `📖 DOC: API Interface Tutorial`


1. `🚀 RELEASE: IMPERITIVE_MESSAGE_GOES_HERE`
	> Use when you release a new version.
	> E.g. `🚀 RELEASE: Version 2.0.0`


1. `✅ TEST: IMPERITIVE_MESSAGE_GOES_HERE`
	> Use when you release a new version.
	> E.g. `✅ TEST: Mock User Login/Logout`

_— That's it for now. Nothing more nothing less._


<br />

![More](https://on.ahmda.ws/orsm/c)

#### Workflow!

For quick prototyping, I have made the following functions that you can add to your `.bashrc`/`.zshrc` files and use Emoji-Log quickly.


```sh
#.# Better Git Logs.
### Using EMOJI-LOG (https://github.com/ahmadawais/Emoji-Log).

# Git Commit, Add all, and Push — in one step.
function gcap() {
	git add . && git commit -m "$*" && git push
}

# NEW.
function gnew() {
	gcap "📦 NEW: $@"
}

# IMPROVE.
function gimp() {
	gcap "👌 IMPROVE: $@"
}

# FIX.
function gfix() {
	gcap "🐛 FIX: $@"
}

# RELEASE.
function grlz() {
	gcap "🚀 RELEASE: $@"
}

# DOC.
function gdoc() {
	gcap "📖 DOC: $@"
}

# TEST.
function gtst() {
	gcap "✅ TEST: $@"
}
```

<br />

![Using](https://on.ahmda.ws/rP6e/c)

### USING `EMOJI-LOG`!

Here's a list of repos that make use of Emoji-Log.

- [Create-Guten-Block](https://github.com/ahmadawais/create-guten-block/commits/master)
- [AhmadAwais](https://github.com/ahmadawais) — Latest repos on this account.
- **You?!** Add your repo to the list after adding the Emoji-log badge to your readme.


<br />

![badge](https://on.ahmda.ws/rOMZ/c)

### `EMOJI-LOG` BADGE!

If your repo uses `EMOJI-LOG` then you can add any of the following badges to your read me and send me a PR to list your repo here.

- **Flat Square**
	- ![emoji-log-badge-flat-square](https://raw.githubusercontent.com/ahmadawais/Emoji-Log/master/badges/emoji-log-badge-flat-round.png)
	- Markdown: `![emoji-log-badge-flat-square](https://raw.githubusercontent.com/ahmadawais/Emoji-Log/master/badges/emoji-log-badge-flat-round.png)`
	- HTML: `<img alt="emoji-log-badge-flat-square" src="https://raw.githubusercontent.com/ahmadawais/Emoji-Log/master/badges/emoji-log-badge-flat-round.png" />`

- **Non-flat Round**
	- ![emoji-log-badge-flat-round](https://raw.githubusercontent.com/ahmadawais/Emoji-Log/master/badges/emoji-log-badge-flat-square.png)
	- Markdown: `![emoji-log-badge-flat-round](https://raw.githubusercontent.com/ahmadawais/Emoji-Log/master/badges/emoji-log-badge-flat-square.png)`
	- HTML: `<img alt="emoji-log-badge-flat-round" src="https://raw.githubusercontent.com/ahmadawais/Emoji-Log/master/badges/emoji-log-badge-flat-square.png" />`

_Are you a designer?! This project could use better badges, kindly contribute._