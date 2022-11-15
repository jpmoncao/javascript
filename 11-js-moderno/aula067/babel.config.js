const presets = [
    [
        "@babel/preset-env",
        {
            useBuiltIns: "usage",
            corejs: "3.26.1"
        }
    ]
]

module.exports = { presets }