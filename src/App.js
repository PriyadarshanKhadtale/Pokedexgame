import React, { Component } from "react";
import pokemons from "./pokecard";
import Pokedex from "./pokedex";
import "./App.css";

class Pokemon extends Component {
  // state = {  }
  render() {
    let hand1 = [];
    let hand2 = [...pokemons];
    // console.log('hand2',hand2);

    while (hand1.length < hand2.length) {
      let index = Math.floor(Math.random() * hand2.length);
      hand1.push(hand2.splice(index, 1)[0]);
    }

    let count1 = 0,
      count2 = 0;
    hand1.map(h1 => {
      return (count1 += h1.base_experience);
    });

    hand2.map(h2 => {
      return (count2 += h2.base_experience);
    });

    return (
      <div>
        <h1>Pokedex!</h1>

        <p className={count1 > count2 ? "win" : "lose"}>
          Total Exp:{count1}
          <br></br>
          {count1 > count2 ? "Winner" : "Looser"}
        </p>
        <Pokedex team={hand1} />

        <p className={count2 > count1 ? "win" : "lose"}>
          Total Exp:{count2}
          <br></br>
          {count2 > count1 ? "Winner" : "Looser"}{" "}
        </p>
        <Pokedex team={hand2} />
      </div>
    );
  }
}

export default Pokemon;
