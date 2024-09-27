const getTotalIsles = function (grid) {


  // write your code here
  
  const getTotalIsles = function (grid) {
    // Function to count the islands
    function countIslands(grid) {
        if (!grid || grid.length === 0) {
            return 0;
        }

        const rows = grid.length;
        const cols = grid[0].length;
        const visited = new Set();
        let islands = 0;

        function dfs(i, j) {
            // Check for out of bounds, water, or already visited
            if (i < 0 || i >= rows || j < 0 || j >= cols || grid[i][j] === 'W' || visited.has(${i},${j})) {
                return;
            }

            // Mark the cell as visited
            visited.add(${i},${j});

            // Explore all four directions
            dfs(i + 1, j); // Down
            dfs(i - 1, j); // Up
            dfs(i, j + 1); // Right
            dfs(i, j - 1); // Left
        }

        for (let i = 0; i < rows; i++) {
            for (let j = 0; j < cols; j++) {
                if (grid[i][j] === 'L' && !visited.has(${i},${j})) {
                    islands++;
                    dfs(i, j); // Start DFS from this land cell
                }
            }
        }

        return islands;
    }

    return countIslands(grid);
};

module.exports = getTotalIsles;
