import React, { Component } from 'react';
import './App.css';

const logoImage = require(`./images/wizard-of-oz.jpg`);

class Main extends Component {
   render() {
      return (
         <div>
            <div>
               <img src={logoImage} alt="The Crew of Oz" className="img-hero" />
            </div>

            <div className="flex-container">
               <main>
                  <h2>We are not in Kansas anymore</h2>
                  <p>The film begins in Kansas, which is depicted in a sepia tone. Dorothy Gale lives with her dog, Toto, on her Aunt Em and Uncle Henry's farm. Toto gets in trouble with a mean neighbor, Miss Almira Gulch, when he bites her. However, Dorothy's family and the farmhands are all too busy to pay her any attention. Miss Gulch arrives with permission from the sheriff to have Toto put down. She takes him away, but he escapes and returns to Dorothy, who then decides to run away from home, fearing that Miss Gulch will return.</p>
                  <p>They meet Professor Marvel, a phony but kindly fortune teller, who realizes Dorothy has run away and uses his crystal ball to dupe her into believing that Aunt Em is ill so that she must return home. She races home just as a powerful tornado
                     strikes. Unable to get into the storm cellar, she seeks safety in her bedroom. A wind-blown window sash hits her in the
                     head, knocking her out. She then awakens to find the house has apparently been picked up and sent spinning up into the
                     air by the tornado. She looks outside the window and sees several farm animals, an old lady sitting in a chair knitting,
                     two men rowing a boat, and Miss Gulch, who transforms into a cackling witch flying on a broomstick.
                  </p>
               </main>

               <aside>
                  <article>
                     <h3>Ruby Slippers</h3>
                     <p>Because of their iconic stature,[99] the ruby slippers worn by Judy Garland in the film are now among the most treasured
                     and valuable film memorabilia in movie history.[100] The silver slippers that Dorothy wore in the book series were changed
                     to ruby to take advantage of the new Technicolor process. Adrian, MGM's chief costume designer, was responsible for the
                     final design. A number of pairs were made, though no one knows exactly how many.</p>
                     <p>After filming, the slippers were stored among the studio's extensive collection of costumes and faded from attention.
                     They were found in the basement of MGM's wardrobe department during preparations for a mammoth auction in 1970. One
                     pair was the highlight of the auction, going for a then unheard of $15,000 to an anonymous buyer, who apparently donated
                     them to the Smithsonian Institution in 1979. Four other pairs are known to exist; one sold for $666,000 at auction
                     in 2000. A pair was stolen from the Judy Garland Museum in Grand Rapids, Minnesota and remains missing.[101]</p>
                     <p>Another, differently styled pair not used in the film was sold at auction with the rest of her collections by owner actress Debbie Reynolds for $510,000 (not including the buyer's premium) in June 2011.[102]</p>
                  </article>
                  <article>
                     <h3>We Welcome You To Munchkinland</h3>
                     <p><strong>We welcome you to munckin land,</strong>
                        Tra la la la la la la la, Tra la la la Tra la la la la la la la, Tra la la la 🤓
                     </p>
                  </article>

               </aside>
            </div>
         </div>

      );
   }
}

export default Main;