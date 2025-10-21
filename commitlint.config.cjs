/** https://cz-git.qbb.sh/zh/ */

const { execSync } = require('child_process')

// 当前分支
const curBranch = execSync('git rev-parse --abbrev-ref HEAD').toString().trim();

module.exports = {
  rules: {
    // @see: https://commitlint.js.org/#/reference-rules
  },
  prompt: {
    /**
     * 别名: 针对频繁性输出的 commit message
     * 使用: npx czg :[别名] 即可
     */
    alias: {
      mr: `merge(${curBranch}): 合并代码, 解决冲突`
    },
    /** 步骤提示 */
    messages: {
      type: '选择你要提交的类型 :',
      scope: '选择一个提交范围（可选）:',
      customScope: '请输入自定义的提交范围 :',
      subject: '填写简短精炼的变更描述 :\n',
      body: '填写更加详细的变更描述（可选）。使用 "|" 换行 :\n',
      breaking: '列举非兼容性重大的变更（可选）。使用 "|" 换行 :\n',
      footerPrefixesSelect: '选择关联issue前缀（可选）:',
      customFooterPrefix: '输入自定义issue前缀 :',
      footer: '列举关联issue (可选) 例如: #31, #I3244 :\n',
      confirmCommit: '是否提交或修改commit ?'
    },
    /** commit 类型 */
    types: [
      { value: "feat", name: "feat:     ✨  新增功能", emoji: ":sparkles:" },
      { value: "fix", name: "fix:      🐛  修复缺陷", emoji: ":bug:" },
      { value: "merge", name: "merge:     💫  合并代码", emoji: ":dizzy:" },
      { value: "docs", name: "docs:     📝  文档变更", emoji: ":memo:" },
      { value: "style", name: "style:    💄  代码格式（不影响功能，例如空格、分号、css等格式修正）", emoji: ":lipstick:" },
      { value: "refactor", name: "refactor: ♻️  代码重构（不包括 bug 修复、功能新增）", emoji: ":recycle:" },
      { value: "perf", name: "perf:     ⚡️   性能优化", emoji: ":zap:" },
      { value: "test", name: "test:     ✅  添加疏漏测试或已有测试改动", emoji: ":white_check_mark:" },
      { value: "build", name: "build:    📦️   构建流程、外部依赖变更（如升级 npm 包、修改 webpack 配置等）", emoji: ":package:" },
      { value: "ci", name: "ci:       🎡  修改 CI 配置、脚本", emoji: ":ferris_wheel:" },
      { value: "chore", name: "chore:    🔨  对构建过程或辅助工具和库的更改（不影响源文件、测试用例）", emoji: ":hammer:" },
      { value: "revert", name: "revert:   ⏪️  回滚 commit", emoji: ":rewind:" }
    ],
    /** 本次 commit 涉及范围 */
    scopes: [
      { value: curBranch, name: `branch: ${curBranch}` },
      { value: 'app', name: 'app:       系统业务' },
      { value: 'integration', name: 'integration:      集成' },
      { value: 'feature', name: 'feature:      功能' },
      { value: 'template', name: 'template:      模板' },
    ],
    /** 默认范围 */
    defaultScope: curBranch,
    /** 是否使用 emoji */
    useEmoji: false,
    /** emoji 位置 */
    emojiAlign: 'center',
    /** 是否使用 AI */
    useAI: false,
    /** AI 位置 */
    aiNumber: 1,
    themeColorCode: '',
    allowCustomScopes: true,
    allowEmptyScopes: true,
    customScopesAlign: 'bottom',
    customScopesAlias: 'custom',
    emptyScopesAlias: 'empty',
    upperCaseSubject: false,
    markBreakingChangeMode: false,
    allowBreakingChanges: ['feat', 'fix'],
    breaklineNumber: 100,
    breaklineChar: '|',
    skipQuestions: [],
    issuePrefixes: [],
    customIssuePrefixAlign: 'top',
    emptyIssuePrefixAlias: 'skip',
    customIssuePrefixAlias: 'custom',
    allowCustomIssuePrefix: true,
    allowEmptyIssuePrefix: true,
    confirmColorize: true,
    maxHeaderLength: Infinity,
    maxSubjectLength: Infinity,
    minSubjectLength: 0,
    scopeOverrides: undefined,
    defaultBody: '',
    defaultIssues: '',
    defaultSubject: ''
  }
}
