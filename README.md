# Trash Utils

> A lightning-fast collection of utility functions built with Bun ⚡  
> *"One developer's trash is another developer's treasure"* 🗑️✨

[![Built with Bun](https://img.shields.io/badge/Built%20with-Bun-1f2937?logo=bun)](https://bun.sh)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![ESM Only](https://img.shields.io/badge/ESM-Only-brightgreen)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
[![Made with ❤️](https://img.shields.io/badge/Made%20with-❤️-red)](https://github.com/briancao)

## ✨ Features

- 🚀 **Blazing Fast** - Built with Bun's native toolchain for maximum performance
- 🎯 **TypeScript First** - Full type safety with excellent developer experience
- 📦 **ESM Only** - Modern ES modules with perfect tree-shaking support
- 🧪 **100% Tested** - Comprehensive test suite with Bun's native test runner
- 📊 **Coverage Reports** - Built-in coverage tracking and reporting
- 🏗️ **Zero Config** - No complex build configuration required
- 🔥 **Type Guards** - Functions work as TypeScript type guards where applicable

## 📋 Requirements

- **Bun** >= 1.0.0 (for development)
- **Node.js** >= 18 (for runtime, if not using Bun)

## 🚀 Installation

### Using Bun (Recommended)
```bash
bun add trash-utils
```

### Using npm
```bash
npm install trash-utils
```

### Using yarn
```bash
yarn add trash-utils
```

## 📖 Usage

```typescript
import { isNum } from 'trash-utils'

// Basic usage
console.log(isNum(42))       // true
console.log(isNum('42'))     // false
console.log(isNum(NaN))      // false
console.log(isNum(Infinity)) // false

// TypeScript type guard
function processValue(value: unknown) {
  if (isNum(value)) {
    // TypeScript now knows `value` is a number
    return value.toFixed(2)
  }
  return 'Not a number'
}
```

## 📚 API Reference

### `isNum(n: any): n is number`

Returns `true` if the given value is a valid finite number, `false` otherwise.

**Type Guard**: ✅ This function works as a TypeScript type guard

**Parameters:**
- `n` - The value to check

**Returns:** `boolean` - `true` if valid number, `false` otherwise

**Behavior:**
- ✅ Regular numbers: `42`, `-42`, `3.14`
- ❌ `NaN` - Returns `false`
- ❌ `Infinity` / `-Infinity` - Returns `false`
- ❌ Strings: `'42'`, `'hello'`
- ❌ Other types: `null`, `undefined`, `{}`, `[]`

**Examples:**
```typescript
// Valid numbers
isNum(0)          // true
isNum(42)         // true
isNum(-42)        // true
isNum(3.14159)    // true

// Invalid numbers
isNum(NaN)        // false
isNum(Infinity)   // false
isNum(-Infinity)  // false

// Non-numbers
isNum('42')       // false
isNum(null)       // false
isNum(undefined)  // false
isNum({})         // false
isNum([])         // false
```

## 🏗️ Development

This project uses **Bun** as the primary development tool for optimal performance.

### Prerequisites

Install Bun:
```bash
# macOS, Linux, and WSL
curl -fsSL https://bun.sh/install | bash

# Windows (PowerShell)
irm bun.sh/install.ps1 | iex
```

### Setup

```bash
# Clone the repository
git clone <repository-url>
cd trash-utils

# Install dependencies
bun install
```

### Available Scripts

| Command | Description |
|---------|-------------|
| `bun test` | Run all tests |
| `bun test --watch` | Run tests in watch mode |
| `bun test --coverage` | Run tests with coverage report |
| `bun run build` | Build the package |
| `bun run dev` | Build in watch mode |
| `bun run check` | Run all checks (types + tests + coverage) |
| `bun run lint` | Run TypeScript type checking |
| `bun run format` | Format code with Prettier |

### Development Workflow

1. **Make changes** to source files in `src/`
2. **Run tests** with `bun test --watch`
3. **Build** with `bun run build`
4. **Run checks** with `bun run check` before committing

## 🧪 Testing

We use Bun's native test runner for lightning-fast testing:

```bash
# Run all tests
bun test

# Run tests in watch mode (automatically re-runs on file changes)
bun test --watch

# Run tests with coverage report
bun test --coverage

# Run a specific test file
bun test src/isNum.test.ts
```

### Test Coverage

Our test suite maintains high coverage standards:
- **Functions**: 96.88%+
- **Lines**: 100%

## 🏗️ Architecture

### Project Structure

```
trash-utils/
├── src/                    # Source code
│   ├── index.ts           # Main entry point
│   ├── index.test.ts      # Integration tests
│   ├── isNum.ts           # isNum function
│   └── isNum.test.ts      # isNum tests
├── dist/                  # Built output (generated)
│   ├── index.js           # Bundled JavaScript
│   ├── index.d.ts         # TypeScript declarations
│   └── *.map              # Source maps
├── build.ts               # Custom build script
├── check.ts               # Comprehensive check script
├── lint.ts                # Linting script
├── format.ts              # Formatting script
├── bunfig.toml           # Bun configuration
├── tsconfig.json         # TypeScript config (development)
├── tsconfig.build.json   # TypeScript config (build)
└── package.json          # Package configuration
```

### Build System

Our build system leverages Bun's native capabilities:

1. **JavaScript Bundling**: `Bun.build` API for ultra-fast bundling
2. **TypeScript Compilation**: `tsc` for declaration file generation
3. **Minification**: Built-in minification with source maps
4. **Type Checking**: Strict TypeScript checking

### Key Technologies

- **[Bun](https://bun.sh)** - Runtime, package manager, bundler, and test runner
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety and developer experience
- **ESM** - Modern module system for optimal tree-shaking

## 🔧 Configuration Files

- **`bunfig.toml`** - Bun configuration (test settings, install options)
- **`tsconfig.json`** - TypeScript configuration for development
- **`tsconfig.build.json`** - TypeScript configuration for building
- **`package.json`** - Package metadata and scripts

## 📦 Publishing

The package is configured for publishing to npm:

```bash
# Ensure all checks pass
bun run check

# Build the package
bun run build

# Publish (requires npm login)
bun publish
```

The `prepublishOnly` script automatically runs checks and builds before publishing.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Add tests for new functionality
5. Run checks: `bun run check`
6. Commit your changes: `git commit -m 'Add amazing feature'`
7. Push to the branch: `git push origin feature/amazing-feature`
8. Open a Pull Request

### Adding New Utilities

When adding new utility functions:

1. Create the function in `src/yourFunction.ts`
2. Export it from `src/index.ts`
3. Add comprehensive tests in `src/yourFunction.test.ts`
4. Update this README's API reference
5. Ensure all tests pass and coverage remains high

## 📄 License

MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Bun](https://bun.sh) - The incredible all-in-one JavaScript runtime
- Inspired by the need for fast, reliable utility functions
- Coffee ☕ and late-night coding sessions

---

<div align="center">

**Crafted with 💖, ⚡, and a touch of madness by [Brian Cao](https://github.com/briancao)**

*"Why write the same utility functions over and over when you can just... not?"* 🤷‍♂️

**Powered by Bun** 🥖 | **Fueled by TypeScript** 🚀 | **Seasoned with Love** ❤️

*P.S. - If you find any bugs, they're not bugs... they're undocumented features!* 🐛✨

</div>
