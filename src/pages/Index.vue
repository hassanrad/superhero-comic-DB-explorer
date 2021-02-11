<template>
  <Layout>
    <div>
      <table class="superheroList">
        <thead>
          <tr>
            <th>Name</th>
            <th>Number of Comics</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="edge in $page.allSuperhero.edges" :key="edge.node.id">
            <td style="width: 75%;"><a :href="'/superhero/' + edge.node.id">{{edge.node.name}}</a></td>
            <td style="width: 25%;">{{edge.node.comics.available}}</td>
          </tr>
        </tbody>
      </table>
      <Pager :info="$page.allSuperhero.pageInfo" linkClass="pagerLink" 
        class="pager"/>
    </div>
  </Layout>
</template>

<page-query>
  query ($page: Int) {
    allSuperhero(perPage: 10, page: $page, sortBy: "name", order: ASC) @paginate {
      pageInfo {
      totalPages
      currentPage
    }
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
</page-query>

<script>
  import { Pager } from 'gridsome'

  export default {
    metaInfo: {
      title: 'Superhero Comic DB Explorer'
    },
    components: {
      Pager
    }
  }
</script>

<style>
.superheroList {
    font-family: Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    margin-top: 50px;
    margin-bottom: 20px;
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

  .pager {
      display: inline-block;
      width: 100%;
      text-align: center;
  }

  .pagerLink {
        color: var(--link-color);
        text-align: center;
        text-decoration: none;
        padding: .5rem 1rem;
  }

  .pagerLink:hover:not(.active) {
          background-color: var(--bg-content-color);
          border-radius: 5px;
          color: var(--link-color);
  }

  .active {
    background-color: var(--bg-content-color);
    border-radius: 5px;
  }
</style>
