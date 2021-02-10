<template>
  <div>
    <table class="superheroList">
        <thead>
          <tr>
            <th>Name</th>
            <th>Number of Comics</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="edge in $static.allSuperhero.edges" :key="edge.node.id">
            <td>{{edge.node.name }}</td>
            <td>{{edge.node.comics.available}}</td>
          </tr>
        </tbody>
      </table>
    <slot/>
  </div>
</template>

<static-query>
  query {
    allSuperhero(sortBy: "name", order: ASC) {
      edges {
        node {
          id
          name
          comics {
            available
          }
        }
      }
    }
  }
</static-query>

<style>
.superheroList {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  margin-top: 50px;
  margin-bottom: 50px;
  width: 75%;
  margin-left: auto;
  margin-right: auto;
}

.superheroList td, .superheroList th {
  border: 1px solid #ddd;
  padding: 4px;
}

.superheroList tr:nth-child(even){background-color: #f2f2f2;}

.superheroList tr:hover {background-color: #ddd;}

.superheroList th {
  padding-top: 3px;
  padding-bottom: 3px;
  text-align: left;
  background-color: #4CAF50;
  color: white;
}


</style>
