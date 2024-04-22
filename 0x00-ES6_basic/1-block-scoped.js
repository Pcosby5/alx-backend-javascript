export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    task = true; // Removed 'let' to assign new value to existing variables
    task2 = false; // Removed 'let' to assign new value to existing variables
  }

  return [task, task2];
}
