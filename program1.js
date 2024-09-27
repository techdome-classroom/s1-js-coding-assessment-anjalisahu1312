const getTotalIsles = function (grid) {


  // write your code here
  function numIslands(grid) {
    if (!grid || grid.length === 0) return 0;

    let islandCount = 0;

    // Function to perform DFS and mark connected land as water
    function dfs(row, col) {
        // Check boundaries and ensure the current cell is land
        if (
            row < 0 ||
            col < 0 ||
            row >= grid.length ||
            col >= grid[0].length ||
            grid[row][col] === 'W'
        ) {
            return;
        }

        // Mark the current cell as water to avoid revisiting
        grid[row][col] = 'W';

        // Explore all four directions (up, down, left, right)
        dfs(row + 1, col); // down
        dfs(row - 1, col); // up
        dfs(row, col + 1); // right
        dfs(row, col - 1); // left
    }

    // Traverse the entire grid
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            // If we encounter land, start a new DFS to mark the entire island
            if (grid[row][col] === 'L') {
                islandCount++;
                dfs(row, col);
            }
        }
    }

    return islandCount;
}

// Test Cases
const map1 = [
    ["L", "L", "L", "L", "W"],
    ["L", "L", "W", "L", "W"],
    ["L", "L", "W", "W", "W"],
    ["W", "W", "W", "W", "W"],
];

const map2 = [
    ["L", "L", "W", "W", "W"],
    ["L", "L", "W", "W", "W"],
    ["W", "W", "L", "W", "W"],
    ["W", "W", "W", "L", "L"],
];

console.log(numIslands(map1)); // Output: 1
console.log(numIslands(map2)); // Output: 3

};

module.exports = getTotalIsles;