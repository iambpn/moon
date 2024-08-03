// Automatically generated by schematic. DO NOT MODIFY!

/* eslint-disable */

import type { PluginLocator } from './toolchain-config';

/** How to order ownership rules within the generated file. */
export type CodeownersOrderBy = 'file-source' | 'project-name';

/** Configures code ownership rules for generating a `CODEOWNERS` file. */
export interface CodeownersConfig {
	/**
	 * Paths that are applied globally to all projects. Can be relative
	 * from the workspace root, or a wildcard match for any depth.
	 */
	globalPaths: Record<string, string[]>;
	/**
	 * How to order ownership rules within the generated file.
	 *
	 * @default 'file-source'
	 */
	orderBy: CodeownersOrderBy;
	/**
	 * Generates a `CODEOWNERS` file after aggregating all ownership
	 * rules from each project in the workspace.
	 */
	syncOnRun: boolean;
}

/** Configures boundaries and constraints between projects. */
export interface ConstraintsConfig {
	/**
	 * Enforces relationships between projects based on each project's
	 * `type` setting.
	 *
	 * @default true
	 */
	enforceProjectTypeRelationships?: boolean;
	/**
	 * Enforces relationships between projects based on each project's
	 * `tags` setting. Requires a mapping of tags, to acceptable tags.
	 */
	tagRelationships: Record<string, string[]>;
}

/** Configures aspects of the Docker pruning process. */
export interface DockerPruneConfig {
	/**
	 * Automatically delete vendor directories (package manager
	 * dependencies, build targets, etc) while pruning.
	 *
	 * @default true
	 */
	deleteVendorDirectories?: boolean;
	/**
	 * Automatically install production dependencies for all required
	 * toolchain's of the focused projects within the Docker build.
	 *
	 * @default true
	 */
	installToolchainDeps?: boolean;
}

/** Configures aspects of the Docker scaffolding process. */
export interface DockerScaffoldConfig {
	/**
	 * Copy toolchain specific configs/manifests/files into
	 * the workspace skeleton.
	 *
	 * @default true
	 */
	copyToolchainFiles?: boolean;
	/**
	 * List of glob patterns, relative from the workspace root,
	 * to include (or exclude) in the workspace skeleton.
	 */
	include: string[];
}

/** Configures our Docker integration. */
export interface DockerConfig {
	/** Configures aspects of the Docker pruning process. */
	prune: DockerPruneConfig;
	/** Configures aspects of the Docker scaffolding process. */
	scaffold: DockerScaffoldConfig;
}

/** Configures experiments across the entire moon workspace. */
export interface ExperimentsConfig {
	/**
	 * Enables the new & modern action pipeline.
	 *
	 * @default true
	 */
	actionPipelineV2?: boolean;
	/**
	 * @default true
	 * @deprecated
	 */
	interweavedTaskInheritance?: boolean;
	/**
	 * Ensure that the a project alias is only used once. Duplicate
	 * aliases will trigger a hard failure.
	 *
	 * @default true
	 */
	strictProjectAliases?: boolean;
	/**
	 * @default true
	 * @deprecated
	 */
	taskOutputBoundaries?: boolean;
}

/** Configures an individual extension. */
export interface ExtensionConfig {
	/** Arbitrary configuration that'll be passed to the WASM plugin. */
	config: Record<string, unknown>;
	/** Location of the WASM plugin to use. */
	plugin: PluginLocator | null;
}

/** Configures the generator for scaffolding from templates. */
export interface GeneratorConfig {
	/**
	 * The list of file paths, relative from the workspace root,
	 * in which to locate templates.
	 */
	templates?: string[];
}

/** The optimization to use when hashing. */
export type HasherOptimization = 'accuracy' | 'performance';

/** The strategy to use when walking the file system. */
export type HasherWalkStrategy = 'glob' | 'vcs';

/** Configures aspects of the content hashing engine. */
export interface HasherConfig {
	/**
	 * The number of files to include in each hash operation.
	 *
	 * @default 2500
	 */
	batchSize?: number;
	/**
	 * When `warnOnMissingInputs` is enabled, filters missing file
	 * paths from logging a warning.
	 */
	ignoreMissingPatterns: string[];
	/**
	 * Filters file paths that match a configured glob pattern
	 * when a hash is being generated. Patterns are workspace relative,
	 * so prefixing with `**` is recommended.
	 */
	ignorePatterns: string[];
	/**
	 * The optimization to use when hashing.
	 *
	 * @default 'accuracy'
	 */
	optimization: HasherOptimization;
	/**
	 * The strategy to use when walking the file system.
	 *
	 * @default 'vcs'
	 */
	walkStrategy: HasherWalkStrategy;
	/**
	 * Logs a warning when a task has configured an explicit file path
	 * input, and that file does not exist when hashing.
	 *
	 * @default true
	 */
	warnOnMissingInputs?: boolean;
}

/** Configures how and where notifications are sent. */
export interface NotifierConfig {
	/** A secure URL in which to send webhooks to. */
	webhookUrl: string | null;
}

/** Configures projects in the workspace, using both globs and explicit source paths. */
export interface WorkspaceProjectsConfig {
	/**
	 * A list of globs in which to locate project directories.
	 * Can be suffixed with `moon.yml` or `moon.pkl` to only find distinct projects.
	 */
	globs: string[];
	/** A mapping of project IDs to relative file paths to each project directory. */
	sources: Record<string, string>;
}

export type WorkspaceProjects = WorkspaceProjectsConfig | string[] | Record<string, string>;

/** Configures aspects of the task runner (also known as the action pipeline). */
export interface RunnerConfig {
	/**
	 * List of target's for tasks without outputs, that should be
	 * cached and persisted.
	 */
	archivableTargets: string[];
	/**
	 * Automatically clean the cache after every task run.
	 *
	 * @default true
	 */
	autoCleanCache?: boolean;
	/**
	 * The lifetime in which task outputs will be cached.
	 *
	 * @default '7 days'
	 */
	cacheLifetime?: string;
	/**
	 * Automatically inherit color settings for all tasks being ran.
	 *
	 * @default true
	 */
	inheritColorsForPipedTasks?: boolean;
	/** Logs the task's command and arguments when running the task. */
	logRunningCommand: boolean;
}

/** The VCS being utilized by the repository. */
export type VcsManager = 'git';

/**
 * The upstream version control provider, where the repository
 * source code is stored.
 */
export type VcsProvider = 'bitbucket' | 'github' | 'gitlab' | 'other';

/** Configures the version control system (VCS). */
export interface VcsConfig {
	/**
	 * The default branch / base.
	 *
	 * @default 'master'
	 */
	defaultBranch?: string;
	/** A mapping of hooks to commands to run when the hook is triggered. */
	hooks: Record<string, string[]>;
	/**
	 * The VCS client being utilized by the repository.
	 *
	 * @default 'git'
	 */
	manager: VcsManager;
	/**
	 * The upstream version control provider, where the repository
	 * source code is stored.
	 *
	 * @default 'github'
	 */
	provider: VcsProvider;
	/** List of remote's in which to compare branches against. */
	remoteCandidates?: string[];
	/** Generates hooks and scripts based on the `hooks` setting. */
	syncHooks: boolean;
}

/**
 * Configures all aspects of the moon workspace.
 * Docs: https://moonrepo.dev/docs/config/workspace
 */
export interface WorkspaceConfig {
	/** @default 'https://moonrepo.dev/schemas/workspace.json' */
	$schema?: string;
	/** Configures code ownership rules for generating a `CODEOWNERS` file. */
	codeowners: CodeownersConfig;
	/** Configures boundaries and constraints between projects. */
	constraints: ConstraintsConfig;
	/** Configures Docker integration for the workspace. */
	docker: DockerConfig;
	/** Configures experiments across the entire moon workspace. */
	experiments: ExperimentsConfig;
	/**
	 * Extends another workspace configuration file. Supports a relative
	 * file path or a secure URL.
	 */
	extends: string | null;
	/** Configures extensions that can be executed with `moon ext`. */
	extensions: Record<string, ExtensionConfig>;
	/** Configures the generator for scaffolding from templates. */
	generator: GeneratorConfig;
	/** Configures aspects of the content hashing engine. */
	hasher: HasherConfig;
	/** Configures how and where notifications are sent. */
	notifier: NotifierConfig;
	/**
	 * Configures all projects within the workspace to create a project graph.
	 * Accepts a list of globs, a mapping of projects to relative file paths,
	 * or both values.
	 */
	projects: WorkspaceProjects;
	/** Configures aspects of the task runner (also known as the action pipeline). */
	runner: RunnerConfig;
	/**
	 * Collects anonymous usage information, and checks for new moon versions.
	 *
	 * @default true
	 */
	telemetry?: boolean;
	/** Configures the version control system (VCS). */
	vcs: VcsConfig;
	/** Requires a specific version of the `moon` binary. */
	versionConstraint: string | null;
}

/** Configures code ownership rules for generating a `CODEOWNERS` file. */
export interface PartialCodeownersConfig {
	/**
	 * Paths that are applied globally to all projects. Can be relative
	 * from the workspace root, or a wildcard match for any depth.
	 */
	globalPaths?: Record<string, string[]> | null;
	/**
	 * How to order ownership rules within the generated file.
	 *
	 * @default 'file-source'
	 */
	orderBy?: CodeownersOrderBy | null;
	/**
	 * Generates a `CODEOWNERS` file after aggregating all ownership
	 * rules from each project in the workspace.
	 */
	syncOnRun?: boolean | null;
}

/** Configures boundaries and constraints between projects. */
export interface PartialConstraintsConfig {
	/**
	 * Enforces relationships between projects based on each project's
	 * `type` setting.
	 *
	 * @default true
	 */
	enforceProjectTypeRelationships?: boolean | null;
	/**
	 * Enforces relationships between projects based on each project's
	 * `tags` setting. Requires a mapping of tags, to acceptable tags.
	 */
	tagRelationships?: Record<string, string[]> | null;
}

/** Configures aspects of the Docker pruning process. */
export interface PartialDockerPruneConfig {
	/**
	 * Automatically delete vendor directories (package manager
	 * dependencies, build targets, etc) while pruning.
	 *
	 * @default true
	 */
	deleteVendorDirectories?: boolean | null;
	/**
	 * Automatically install production dependencies for all required
	 * toolchain's of the focused projects within the Docker build.
	 *
	 * @default true
	 */
	installToolchainDeps?: boolean | null;
}

/** Configures aspects of the Docker scaffolding process. */
export interface PartialDockerScaffoldConfig {
	/**
	 * Copy toolchain specific configs/manifests/files into
	 * the workspace skeleton.
	 *
	 * @default true
	 */
	copyToolchainFiles?: boolean | null;
	/**
	 * List of glob patterns, relative from the workspace root,
	 * to include (or exclude) in the workspace skeleton.
	 */
	include?: string[] | null;
}

/** Configures our Docker integration. */
export interface PartialDockerConfig {
	/** Configures aspects of the Docker pruning process. */
	prune?: PartialDockerPruneConfig | null;
	/** Configures aspects of the Docker scaffolding process. */
	scaffold?: PartialDockerScaffoldConfig | null;
}

/** Configures experiments across the entire moon workspace. */
export interface PartialExperimentsConfig {
	/**
	 * Enables the new & modern action pipeline.
	 *
	 * @default true
	 */
	actionPipelineV2?: boolean | null;
	/**
	 * @default true
	 * @deprecated
	 */
	interweavedTaskInheritance?: boolean | null;
	/**
	 * Ensure that the a project alias is only used once. Duplicate
	 * aliases will trigger a hard failure.
	 *
	 * @default true
	 */
	strictProjectAliases?: boolean | null;
	/**
	 * @default true
	 * @deprecated
	 */
	taskOutputBoundaries?: boolean | null;
}

/** Configures an individual extension. */
export interface PartialExtensionConfig {
	/** Arbitrary configuration that'll be passed to the WASM plugin. */
	config?: Record<string, unknown> | null;
	/** Location of the WASM plugin to use. */
	plugin?: PluginLocator | null;
}

/** Configures the generator for scaffolding from templates. */
export interface PartialGeneratorConfig {
	/**
	 * The list of file paths, relative from the workspace root,
	 * in which to locate templates.
	 */
	templates?: string[] | null;
}

/** Configures aspects of the content hashing engine. */
export interface PartialHasherConfig {
	/**
	 * The number of files to include in each hash operation.
	 *
	 * @default 2500
	 */
	batchSize?: number | null;
	/**
	 * When `warnOnMissingInputs` is enabled, filters missing file
	 * paths from logging a warning.
	 */
	ignoreMissingPatterns?: string[] | null;
	/**
	 * Filters file paths that match a configured glob pattern
	 * when a hash is being generated. Patterns are workspace relative,
	 * so prefixing with `**` is recommended.
	 */
	ignorePatterns?: string[] | null;
	/**
	 * The optimization to use when hashing.
	 *
	 * @default 'accuracy'
	 */
	optimization?: HasherOptimization | null;
	/**
	 * The strategy to use when walking the file system.
	 *
	 * @default 'vcs'
	 */
	walkStrategy?: HasherWalkStrategy | null;
	/**
	 * Logs a warning when a task has configured an explicit file path
	 * input, and that file does not exist when hashing.
	 *
	 * @default true
	 */
	warnOnMissingInputs?: boolean | null;
}

/** Configures how and where notifications are sent. */
export interface PartialNotifierConfig {
	/** A secure URL in which to send webhooks to. */
	webhookUrl?: string | null;
}

/** Configures projects in the workspace, using both globs and explicit source paths. */
export interface PartialWorkspaceProjectsConfig {
	/**
	 * A list of globs in which to locate project directories.
	 * Can be suffixed with `moon.yml` or `moon.pkl` to only find distinct projects.
	 */
	globs?: string[] | null;
	/** A mapping of project IDs to relative file paths to each project directory. */
	sources?: Record<string, string> | null;
}

export type PartialWorkspaceProjects =
	| PartialWorkspaceProjectsConfig
	| string[]
	| Record<string, string>;

/** Configures aspects of the task runner (also known as the action pipeline). */
export interface PartialRunnerConfig {
	/**
	 * List of target's for tasks without outputs, that should be
	 * cached and persisted.
	 */
	archivableTargets?: string[] | null;
	/**
	 * Automatically clean the cache after every task run.
	 *
	 * @default true
	 */
	autoCleanCache?: boolean | null;
	/**
	 * The lifetime in which task outputs will be cached.
	 *
	 * @default '7 days'
	 */
	cacheLifetime?: string | null;
	/**
	 * Automatically inherit color settings for all tasks being ran.
	 *
	 * @default true
	 */
	inheritColorsForPipedTasks?: boolean | null;
	/** Logs the task's command and arguments when running the task. */
	logRunningCommand?: boolean | null;
}

/** Configures the version control system (VCS). */
export interface PartialVcsConfig {
	/**
	 * The default branch / base.
	 *
	 * @default 'master'
	 */
	defaultBranch?: string | null;
	/** A mapping of hooks to commands to run when the hook is triggered. */
	hooks?: Record<string, string[]> | null;
	/**
	 * The VCS client being utilized by the repository.
	 *
	 * @default 'git'
	 */
	manager?: VcsManager | null;
	/**
	 * The upstream version control provider, where the repository
	 * source code is stored.
	 *
	 * @default 'github'
	 */
	provider?: VcsProvider | null;
	/** List of remote's in which to compare branches against. */
	remoteCandidates?: string[] | null;
	/** Generates hooks and scripts based on the `hooks` setting. */
	syncHooks?: boolean | null;
}

/**
 * Configures all aspects of the moon workspace.
 * Docs: https://moonrepo.dev/docs/config/workspace
 */
export interface PartialWorkspaceConfig {
	/** @default 'https://moonrepo.dev/schemas/workspace.json' */
	$schema?: string | null;
	/** Configures code ownership rules for generating a `CODEOWNERS` file. */
	codeowners?: PartialCodeownersConfig | null;
	/** Configures boundaries and constraints between projects. */
	constraints?: PartialConstraintsConfig | null;
	/** Configures Docker integration for the workspace. */
	docker?: PartialDockerConfig | null;
	/** Configures experiments across the entire moon workspace. */
	experiments?: PartialExperimentsConfig | null;
	/**
	 * Extends another workspace configuration file. Supports a relative
	 * file path or a secure URL.
	 */
	extends?: string | null;
	/** Configures extensions that can be executed with `moon ext`. */
	extensions?: Record<string, PartialExtensionConfig> | null;
	/** Configures the generator for scaffolding from templates. */
	generator?: PartialGeneratorConfig | null;
	/** Configures aspects of the content hashing engine. */
	hasher?: PartialHasherConfig | null;
	/** Configures how and where notifications are sent. */
	notifier?: PartialNotifierConfig | null;
	/**
	 * Configures all projects within the workspace to create a project graph.
	 * Accepts a list of globs, a mapping of projects to relative file paths,
	 * or both values.
	 */
	projects?: PartialWorkspaceProjects | null;
	/** Configures aspects of the task runner (also known as the action pipeline). */
	runner?: PartialRunnerConfig | null;
	/**
	 * Collects anonymous usage information, and checks for new moon versions.
	 *
	 * @default true
	 */
	telemetry?: boolean | null;
	/** Configures the version control system (VCS). */
	vcs?: PartialVcsConfig | null;
	/** Requires a specific version of the `moon` binary. */
	versionConstraint?: string | null;
}
