import { create } from 'zustand'

const useDrawingStore = create((set) => ({
  selectedColor: '#000000',
  grid: Array(32).fill().map(() => Array(40).fill('#FFFFFF')),
  colors: [
    '#FF0000', '#FF4500', '#FFA500', '#FFD700', '#FFFF00', 
    '#32CD32', '#008000', '#00FFFF', '#0000FF', '#4B0082',
    '#800080', '#FF69B4', '#FF1493', '#8B4513', '#FFFFFF',
    '#000000', '#808080', '#A0522D', '#DEB887', '#F0E68C'
  ],

  setSelectedColor: (color) => set({ selectedColor: color }),
  
  clearGrid: () => 
    set(() => ({
      grid: Array(32).fill().map(() => Array(32).fill('#FFFFFF'))
    })),

  updateCell: (rowIndex, colIndex) => 
    set((state) => ({
      grid: state.grid.map((row, i) =>
        i === rowIndex
          ? row.map((cell, j) => 
              j === colIndex ? state.selectedColor : cell
            )
          : [...row]
      )
    }))
}))

export default useDrawingStore