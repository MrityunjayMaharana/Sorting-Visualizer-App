import React from "react";
import "./Navbar.css";
import logo from '../assets/sort-by.png'

const Navbar = ({
  handleLength,
  handleSpeed,
  handleAlgo,
  generateRandomArray,
  handleSort,
  sorting,
  completed,
  len,
  speed,
  algo,
}) => {
  return (
    <nav>
      <div className="nav-brand">
        <img src={ logo } width={32} alt="logo" />
        Sorting Visualizer
      </div>

      <div className="toolbox">
        <div>
          <div className="group speed">
            <label>Speed</label>
            <input
              type="range"
              onChange={handleSpeed}
              min="50"
              max="100"
              value={Math.ceil(400 / speed)}
              disabled={sorting}
            />
          </div>

          <div className="group length">
            <label>Length</label>
            <input
              type="range"
              onChange={handleLength}
              defaultValue={100}
              min="50"
              max={150}
              step="1"
              disabled={sorting}
              value={len}
            />
          </div>

          <select onChange={handleAlgo} disabled={sorting} value={algo}>
            <option value="bubbleSort">Bubble Sort</option>
            <option value="selectionSort">Selection Sort</option>
            <option value="insertionSort">Insertion Sort</option>
            <option value="mergeSort">Merge Sort</option>
            <option value="quickSort">Quick Sort</option>
          </select>
        </div>

        <div>
          <button onClick={generateRandomArray} disabled={sorting}>
            New Array
          </button>
          <button onClick={handleSort} disabled={sorting || completed}>
            Sort
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
