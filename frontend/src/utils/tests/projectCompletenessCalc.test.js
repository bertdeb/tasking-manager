import { computeCompleteness } from '../projectCompletenessCalc';
import { tasksGeojson } from './snippets/tasksGeometry';

it('computeCompleteness', () => {
  const project = computeCompleteness(tasksGeojson);
  expect(project.percentMapped).toBe(28);
  expect(project.percentValidated).toBe(14);
  expect(project.percentBadImagery).toBe(12);
});

it('computeCompleteness return 0 to all values if tasks geojson is not provided', () => {
  const project = computeCompleteness();
  expect(project.percentMapped).toBe(0);
  expect(project.percentValidated).toBe(0);
  expect(project.percentBadImagery).toBe(0);
});
