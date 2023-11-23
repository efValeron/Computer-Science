// Computer Science 23.11.2023

function printNumberNToZero(n) {
  if (n < 0) return
  printNumberNToZero(n - 1)
  console.log(n)
}

function sumNumberFrom0_n(n) {
  if (n === 0) return 0
  return n + sumNumberFrom0_n(n - 1)
}

function factorialN(n) {
  if (n === 0 || n === 1) return 1
  return n * factorialN(n - 1)
}

// console.log(factorialN(5))


const fileSystem = [
  {
    name: "folder1",
    type: "folder",
    children: [
      {
        name: "file1",
        type: "file"
      },
      {
        name: "insideFolder1",
        type: "folder",
        children: [
          {
            name: "file2",
            type: "file"
          }
        ]
      },
      {
        name: "insideFolder2",
        type: "folder",
        children: [
          {
            name: "file3",
            type: "file"
          },
          {
            name: "insideFolder3",
            type: "folder",
            children: []
          }
        ]
      }
    ]
  },
  {
    name: "folder2",
    type: "folder",
    children: [
      {
        name: "file4",
        type: "file"
      },
      {
        name: "insideFolder3",
        type: "folder",
        children: []
      }
    ]
  }
]


function renderRecursive(items, n = 0) {
  items.forEach((item) => {
    console.log(" ".repeat(n * 2), item.type === "folder" ? "📁" : "📄", item.name)
    if (item.type === "folder" && item.children.length) {
      renderRecursive(item.children, n + 1)
    }
  })
}

// renderRecursive(fileSystem)


function render(items) {
  let stack = items.map(i => ({ ...i, deep: 0 }))

  while (stack.length > 0) {
    const item = stack.shift()
    console.log(" ".repeat(item.deep * 2), item.type === "folder" ? "📁" : "📄", item.name)
    if (item.type === "folder" && item.children.length) {
      stack.unshift(...item.children.map(i => ({ ...i, deep: item.deep + 1 })))
    }
  }
}

// render(fileSystem)


const array = [
  { "id": 0, "name": "Eva" },
  { "id": 1, "name": "Julia3" },
  { "id": 2, "name": "Charlie2" },
  { "id": 3, "name": "Charlie3" },
  { "id": 4, "name": "Charlie4" },
  { "id": 5, "name": "Fiona" },
  { "id": 6, "name": "Julia2" },
  { "id": 7, "name": "Bob" },
  { "id": 8, "name": "Alice" },
  { "id": 9, "name": "Eva2" },
  // { "id": 10, "name": "Dimych" }
]

function binarySearchBad(inputArray, searchId) {
  const array = [...inputArray]
  while (array.length > 0) {
    const middleIndex = Math.floor(array.length / 2)
    const middleElementId = array[middleIndex].id

    if (middleElementId === searchId) {
      return array[middleIndex]
    } else if (searchId < middleElementId) {
      array.splice(middleIndex)
    } else if (searchId > middleElementId) {
      array.splice(0, middleIndex)
    }
  }
  return undefined
}

// const foundElement = binarySearchBad(array, 9)
// console.log(foundElement)


function binarySearch(array, searchId) {
  let start = 0
  let end = array.length - 1

  while (start <= end) {
    const middleIndex = Math.floor((end + start) / 2)
    const middleElementId = array[middleIndex].id

    if (middleElementId === searchId) {
      return array[middleIndex]
    } else if (searchId < middleElementId) {
      end = middleIndex - 1
    } else if (searchId > middleElementId) {
      start = middleIndex + 1
    }
  }
  return undefined
}

const foundElement = binarySearch(array, 9)
console.log(foundElement)










