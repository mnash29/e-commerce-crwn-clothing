const selectDirectory = state => state.directory;

export const selectDirectorySections = state => {
  const directory = selectDirectory(state);
  return directory.sections;
}