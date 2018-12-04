import React, {Component} from 'react'
import './Gal.css'

class Gallery extends Component{

  render(){

    let noImage='http://www.gladessheriff.org/media/images/most%20wanted/No%20image%20available.jpg';

    return(

      <div >
      {

        this.props.items.map((item, index)=>{

          let{title, imageLinks, infoLink } =item.volumeInfo;

          return(

            <a
            key={index}
            className="book"
            href={infoLink}
            target="_blank"
            >
              <img
               className="book-Image" src={ imageLinks !== undefined ?
                imageLinks.thumbnail : noImage} alt="book Image"
               />

              <div className="book-Title">
              {title}
              </div>

              </a>
          )

        })

      }
      </div>
    )

  }
}



export default Gallery;
