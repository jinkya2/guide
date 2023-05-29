![img](https://i.stack.imgur.com/wfL82.png)

- async attribute does not guarantee the order of execution of scripts
- load some external script like google analytic scripts, which are independent of normal code, so in that case it makes sense to use async attribute and not defer
- otheerwise its mostly wise to use defer
-   