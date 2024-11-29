// ./CONTRIBUTING.md

# Contributing Guidelines

## Commit Message Format

Each commit message should follow the format: `type: description`

### Types

- `feat`: A new feature
- `fix`: A bug fix
- `docs`: Documentation only changes
- `style`: Changes that do not affect the meaning of the code (white-space, formatting, etc)
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `test`: Adding missing tests or correcting existing tests
- `chore`: Changes to the build process, auxiliary tools, libraries or documentation

### Rules for Commit Messages

- Use the present tense ("add feature" not "added feature")
- Use the imperative mood ("move cursor to..." not "moves cursor to...")
- Limit the first line to 72 characters or less
- Reference issues and pull requests liberally after the first line

### Examples

```
feat: add WebSocket connection support
fix: handle disconnect events properly
docs: update installation guide
test: add unit tests for reconnection logic
chore: update dependencies
```

## Branch Names

Branch names should follow the format: `type/description`

Examples:

- `feat/websocket-implementation`
- `fix/connection-timeout`
- `docs/api-documentation`

## Development Workflow

1. Create a new branch from `main`
2. Make your changes
3. Write or update tests if necessary
4. Ensure all tests pass
5. Update documentation if necessary
6. Submit a pull request

## Code Style

- Follow TypeScript best practices
- Use meaningful variable and function names
- Add comments for complex logic
- Keep functions small and focused
- Write tests for new features

## Testing

- Ensure all tests pass before submitting a pull request
- Write unit tests for new features
- Aim for high test coverage
- Test edge cases and error scenarios

## Pull Request Process

1. Update the README.md with details of changes if necessary
2. Update the documentation if you're changing any interfaces
3. The PR can be merged once you have the sign-off of at least one maintainer
4. Make sure your PR title follows the commit message format
