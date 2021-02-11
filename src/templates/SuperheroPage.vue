<template>
  <Layout>
    <div>
      <h3 v-html="$page.superhero.name" />
      <h6 v-html="$page.superhero.description" />
      <table class="comicList">
          <thead>
            <tr>
              <th>Comic Book Name</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="comic in $page.superhero.comics.items" :key="comic.id">
              <td>{{comic.name }}</td>
            </tr>
          </tbody>
        </table>
      <slot/>
    </div>
  </Layout>
</template>

<page-query>
    query ($id: ID!) {
    superhero(id: $id) {
        name
        description
        comics {
            items {
                name
            }
        }
    }
    }
</page-query>

<style>
.comicList {
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  margin-top: 20px;
  margin-bottom: 20px;
  width: 75%;
  margin-left: auto;
  margin-right: auto;
}

.comicList td, .comicList th {
  border: 1px solid #ddd;
  padding: 4px;
}

.comicList tr:nth-child(even){background-color: #f2f2f2;}

.comicList tr:hover {background-color: #ddd;}

.comicList th {
  padding-top: 3px;
  padding-bottom: 3px;
  text-align: left;
  background-color: #4CAF50;
  color: white;
}
</style>
