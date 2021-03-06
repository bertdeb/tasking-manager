export function computeCompleteness(tasks) {
  if (tasks && tasks.features) {
    const totalTasks = tasks.features.length;
    const mapped = tasks.features.filter((task) => task.properties.taskStatus === 'MAPPED').length;
    const validated = tasks.features.filter((task) => task.properties.taskStatus === 'VALIDATED')
      .length;
    const badImagery = tasks.features.filter((task) => task.properties.taskStatus === 'BADIMAGERY')
      .length;
    return {
      percentMapped: parseInt(((mapped + validated) / (totalTasks - badImagery)) * 100),
      percentValidated: parseInt((validated / (totalTasks - badImagery)) * 100),
      percentBadImagery: parseInt((badImagery / totalTasks) * 100),
    };
  } else {
    return {
      percentMapped: 0,
      percentValidated: 0,
      percentBadImagery: 0,
    };
  }
}
