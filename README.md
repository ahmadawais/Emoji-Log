<h1 align="center">
  <img src="https://on.ahmda.ws/pXeE/c" />

`EMOJI-LOG`

</h1>

> After building [hundreds of open source software](https://github.com/ahmadawais) I've ended up inventing a git commit log standard called `EMOJI-LOG`.

[![emoji-log](https://cdn.rawgit.com/ahmadawais/stuff/ca97874/emoji-log/non-flat-round.svg)](https://github.com/ahmadawais/Emoji-Log/)

<br>

![Philosophy](https://on.ahmda.ws/orq5/c)

### PHILOSOPHY

I like emoji. I like ’em a lot. Programming, code, geeks/nerds, open source, all of that is inherently dull and sometimes boring. Emoji (which is, in fact, the plural of emoji) helps me add colors and emotions to the mix. Nothing wrong if you want to attach feelings to this 2D flat text-based world of code. I found out that instead of memorizing [hundreds of emoji](https://gitmoji.carloscuesta.me/) it's better to keep the categories small and general.


1. **IMPERATIVE** ↓
    - Make your Git commit messages imperative.
    - Write commit message like you're giving an order.
    - E.g., Use ✅ `Add` instead of ❌ `Added`.
    - E.g., Use ✅ `Create` instead of ❌ `Creating`.
1. **RULES** ↓
    - A small number of categories — easy to memorize.
    - Nothing more nothing less.
    - E.g. `📦 NEW`, `👌 IMPROVE`, `🐛 FIX`, `📖 DOC`, `🚀 RELEASE`, and `🤖 TEST`
2. **ACTIONS** ↓
    - Make git commits based on actions you take.
    - Use a good editor like [VSCode](https://code.visualstudio.com/) to commit the right files with commit messages.
<br>


![Start](https://on.ahmda.ws/osd3/c)

### GETTING STARTED

Only use the following Git Commit Messages. A simple and small footprint is critical here.

1. `📦 NEW: IMPERATIVE_MESSAGE_GOES_HERE`
    > Use when you add something entirely new.
    > E.g. `📦 NEW: Add Git ignore file`

1. `👌 IMPROVE: IMPERATIVE_MESSAGE_GOES_HERE`
    > Use when you improve/enhance piece of code like refactoring etc.
    > E.g. `👌 IMPROVE: Remote IP API Function`

1. `🐛 FIX: IMPERATIVE_MESSAGE_GOES_HERE`
    > Use when you fix a bug — need I say more?
    > E.g. `🐛 FIX: Case converter`

1. `📖 DOC: IMPERATIVE_MESSAGE_GOES_HERE`
    > Use when you add documentation like `README.md`, or even inline docs.
    > E.g. `📖 DOC: API Interface Tutorial`


1. `🚀 RELEASE: IMPERATIVE_MESSAGE_GOES_HERE`
    > Use when you release a new version.
    > E.g. `🚀 RELEASE: Version 2.0.0`


1. `🤖 TEST: IMPERATIVE_MESSAGE_GOES_HERE`
    > Use when it's related to testing.
    > E.g. `🤖 TEST: Mock User Login/Logout`

_— That's it for now. Nothing more nothing less._


<br>

![More](https://on.ahmda.ws/orsm/c)

#### THE WORKFLOW & MEANINGS

I'd like to share what each of these emojis mean.

- `📦 NEW:` Emoji meaning: A "package emoji" — which can contain new stuff.
- `👌 IMPROVE:` Emoji meaning: An "OK Hand emoji" — which is meant to appreciate an improvement.
- `🐛 FIX:` Emoji meaning: A "bug emoji" — which means there was a bug that got fixed.
- `📖 DOCS:` Emoji meaning: A "book emoji" — which means documentation or notes just like in a book.
- `🚀 RELEASE:` Emoji meaning: A "rocket emoji" — which is meant to show a new release/launch.
- `🤖 TEST:` Emoji meaning: A "check emoji" — which says some test were run successfully.

For quick prototyping, I have made the following functions that you can add to your `.bashrc`/`.zshrc` files and use Emoji-Log quickly.

```sh
#.# Better Git Logs.
### Using EMOJI-LOG (https://github.com/ahmadawais/Emoji-Log).

# Git Commit, Add all and Push — in one step.
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
    gcap "🤖 TEST: $@"
}
```

To install these functions for the fish shell, run the following commands:

```sh
function gcap; git add .; and git commit -m "$argv"; and git push; end;
function gnew; gcap "📦 NEW: $argv"; end
function gimp; gcap "👌 IMPROVE: $argv"; end;
function gfix; gcap "🐛 FIX: $argv"; end;
function grlz; gcap "🚀 RELEASE: $argv"; end;
function gdoc; gcap "📖 DOC: $argv"; end;
function gtst; gcap "🤖 TEST: $argv"; end;
funcsave gcap
funcsave gnew
funcsave gimp
funcsave gfix
funcsave grlz
funcsave gdoc
funcsave gtst
```

If you prefer, you can paste these aliases directly in your `~/.gitconfig` file:

```sh
# Make sure you're adding under the [alias] block.
[alias]
  # Git Commit, Add all and Push — in one step.
  cap = "!f() { git add .; git commit -m \"$@\"; git push; }; f"

  # NEW.
  new = "!f() { git cap \"📦 NEW: $@\"; }; f"
  # IMPROVE.
  imp = "!f() { git cap \"👌 IMPROVE: $@\"; }; f"
  # FIX.
  fix = "!f() { git cap \"🐛 FIX: $@\"; }; f"
  # RELEASE.
  rlz = "!f() { git cap \"🚀 RELEASE: $@\"; }; f"
  # DOC.
  doc = "!f() { git cap \"📖 DOC: $@\"; }; f"
  # TEST.
  tst = "!f() { git cap \"🤖 TEST: $@\"; }; f"
```

<br>

![Using](https://on.ahmda.ws/rP6e/c)

### USING `EMOJI-LOG`

Here's a list of repos that make use of Emoji-Log.

- [Create-Guten-Block Toolkit →](https://github.com/ahmadawais/create-guten-block/commits/)
- [VSCode Shades of Purple Theme →](https://github.com/ahmadawais/shades-of-purple-vscode/commits/)
- [Ahmad Awais GitHub Repos →](https://github.com/ahmadawais) — _Latest repos on this account._
- [CaptainCore CLI (WordPress Management Toolkit) →](https://github.com/CaptainCore/captaincore-cli/commits/)
- [CaptainCore GUI (WordPress plugin) →](https://github.com/CaptainCore/captaincore-gui/commits/)
- **You?!** Add your repo to the list after adding the Emoji-log badge to your readme.


<br>

![badge](https://on.ahmda.ws/rOMZ/c)

### `EMOJI-LOG` BADGE COLLECTION

If your repo uses `EMOJI-LOG` then you can add any of the following badges to your read me and send me a PR to list your repo here.

<br>

![emoji-log](https://cdn.rawgit.com/ahmadawais/stuff/ca97874/emoji-log/flat.svg)

- **STYLE**: Flat Square
- **MARKDOWN** ↓

```markdown
[![emoji-log](https://cdn.rawgit.com/ahmadawais/stuff/ca97874/emoji-log/flat.svg)](https://github.com/ahmadawais/Emoji-Log/)
```

- **HTML** ↓

```html
<a href="https://github.com/ahmadawais/Emoji-Log/"><img alt="emoji-log" src="https://cdn.rawgit.com/ahmadawais/stuff/ca97874/emoji-log/flat.svg" /></a>
```

<br>

![emoji-log](https://cdn.rawgit.com/ahmadawais/stuff/ca97874/emoji-log/flat-round.svg)

- **STYLE**: Flat Rounded
- **MARKDOWN** ↓

```markdown
[![emoji-log](https://cdn.rawgit.com/ahmadawais/stuff/ca97874/emoji-log/flat-round.svg)](https://github.com/ahmadawais/Emoji-Log/)
```

- **HTML** ↓

```html
<a href="https://github.com/ahmadawais/Emoji-Log/"><img alt="emoji-log" src="https://cdn.rawgit.com/ahmadawais/stuff/ca97874/emoji-log/flat-round.svg" /></a>
```

<br>

![emoji-log](https://cdn.rawgit.com/ahmadawais/stuff/ca97874/emoji-log/non-flat-round.svg)

- **STYLE**: Non-flat Rounded
- **MARKDOWN** ↓

```markdown
[![emoji-log](https://cdn.rawgit.com/ahmadawais/stuff/ca97874/emoji-log/non-flat-round.svg)](https://github.com/ahmadawais/Emoji-Log/)
```

- **HTML** ↓

```html
<a href="https://github.com/ahmadawais/Emoji-Log/"><img alt="emoji-log" src="https://cdn.rawgit.com/ahmadawais/stuff/ca97874/emoji-log/non-flat-round.svg" /></a>
```

<br>

![AlfredSnippets](https://on.ahmda.ws/05bd88/c)

### Alfred Snippets

[Alfred](https://www.alfredapp.com/) [PowerPack](https://www.alfredapp.com/powerpack/) users can use the Snippets feature to quickly call Emoji-Log, or use the text expand feature for even quicker creation.

To setup:

1. Have Alfred 3 with PowerPack installed
2. For auto expansion, in _Alfred Settings » Features » Snippets_ ensure the "Automatically expand snippets by Keyword" box is checked
3. Download & open [`Emoji-Log.alfredsnippets`](Emoji-Log.alfredsnippets), deselecting "Strip snippets of 'auto expand' flag" when prompted

This will give the following text expander keywords for the Emoji-Log:

| Keyword |  Snippet   |
| ------- | ---------- |
| `;gnew` | 📦 NEW:     |
| `;gimp` | 👌 IMPROVE: |
| `;gfix` | 🐛 FIX:     |
| `;grlz` | 🚀 RELEASE: |
| `;gdoc` | 📖 DOC:     |
| `;gtst` | 🤖 TEST:    |

To edit the `;` prefix to your preferred expansion flag, double click right click the Emoji-Log Collection in _Alfred Settings » Features » Snippets_.

<br>

![Hello](https://on.ahmda.ws/os6O/c)

## [SUPPORT OPEN SOURCE PROJECTS](https://pay.paddle.com/checkout/515568) 🎩

If you'd like us to keep producing professional free and open source software (FOSS). Consider [paying for an hour of my dev-time](https://pay.paddle.com/checkout/515568). We'll spend two hours on open source for each contribution. Yeah, that's right, you pay for one hour and get both of us to spend an hour as a thank you.

- 🚀  $99.99 — [Support for one hour or more →](https://pay.paddle.com/checkout/515568)
- 🔰  $49.99 — [Support half an hour maintenance →](https://pay.paddle.com/checkout/527253)
- ☕️  $9.99 — [Buy us lunch or coffee to keep us trucking #OpenSource →](https://pay.paddle.com/checkout/527254)

<br>

![Thanks](https://on.ahmda.ws/orkW/c)

## LICENSE & ATTRIBUTION

- MIT © [Ahmad Awais](https://twitter.com/MrAhmadAwais/)
- [Code of Conduct](code-of-conduct.md)
- [Munawar](https://munwr.com/) for making awesome badges

**_Feel free to say 👋 on Twitter [@MrAhmadAwais →](https://twitter.com/mrahmadawais/)_**
