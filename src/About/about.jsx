import React from 'react'
import './about.css'
import { Timeline, TimelineItem } from 'vertical-timeline-component-for-react';
const about = () => {
  return (
    <div>
      <section className="about-us">
        <div className="container">
          <div className='text-center'><h1>About us <hr /></h1> </div>
          <div className="row">
            <div className="col-md-6">

              <video autoPlay loop muted>
                <source src="\Images\About\video.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="col-md-6">
              <h2>Railicious</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et luctus velit, sed iaculis nisi. Nulla facilisi. Sed at elit massa. Morbi id cursus nisi.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et luctus velit, sed iaculis nisi. Nulla facilisi. Sed at elit massa. Morbi id cursus nisi.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et luctus velit, sed iaculis nisi. Nulla facilisi. Sed at elit massa. Morbi id cursus nisi.
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className='text-center' style={{ fontWeight: "bold", fontSize: "3rem" }}>Our Journey ...</div>
      {/* Timeline */}

      <Timeline lineColor={'#ddd'}>
        <TimelineItem
          key="001"
          dateText="25 August 2022"
          style={{ color: '#e86971' }}
        >
          <h3></h3>
          <h4>Restauran 1</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat hic molestiae reprehenderit tenetur illo accusantium, placeat nostrum veniam atque maxime repellat veritatis corporis, porro impedit fugit voluptate dolorum ad doloremque!
          </p>

        </TimelineItem>
        <TimelineItem
          key="002"
          dateText="26 November 2022"
          dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
          bodyContainerStyle={{
            background: '#ddd',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
          }}
        >
          <h3 style={{ color: '#61b8ff' }}></h3>
          <h4 style={{ color: '#61b8ff' }}>Restauran 1</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis asperiores quo aperiam exercitationem temporibus ipsum quod eveniet suscipit nemo nihil? Corporis et commodi repellat deleniti libero! Voluptatum quos laudantium nulla?
          </p>
          <img src="{rrecl}" alt="Bootstrap" width="350px" height="220" />
        </TimelineItem>
        <TimelineItem
          key="003"
          dateText="8 December 2022"
          dateInnerStyle={{ background: 'rgb(150, 150, 150)', color: '#000' }}

        >
          <h3></h3>
          <h4>Restauran 1</h4>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Delectus sunt obcaecati hic labore natus magni commodi? Voluptatem ipsum facere enim quas vitae perspiciatis. Tempora, est esse nisi animi ullam ab.

          </p>
          <img src="{msme}" alt="Bootstrap" width="350px" height="220" />

        </TimelineItem>
        <TimelineItem
          key="004"
          dateText="24 February 2023"
          dateInnerStyle={{ background: '#76bb7f' }}
        >
          <h3></h3>
          <h4>Restauran 1</h4>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum optio voluptatem sunt quam possimus quod nemo doloremque ducimus, reiciendis aut enim quas tempora, incidunt odit dicta debitis in. Maxime, voluptas.
          </p>
          <img src="{patentimage}" alt="Bootstrap" width="350px" height="220" />
        </TimelineItem>

        <TimelineItem
          key="002"
          dateText="26 March 2023"
          dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
          bodyContainerStyle={{
            background: '#ddd',
            padding: '20px',
            borderRadius: '8px',
            boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
          }}
        >
          <h3 style={{ color: '#61b8ff' }}></h3>
          <h4 style={{ color: '#61b8ff' }}>    Restauran 1
          </h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis debitis labore nulla, ullam sit nemo maiores placeat id deserunt optio sequi voluptatem vel tempore voluptates blanditiis, ipsa fuga dicta molestiae!
          </p>
          <img src="{prto}" alt="Bootstrap" width="320px" height="220" />
        </TimelineItem>

        <TimelineItem
          key="001"
          dateText="26 March 2023"
          style={{ color: '#e86971' }}
        >
          <h3></h3>
          Restauran 1
          <h4></h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis architecto reprehenderit magnam nobis ullam fugiat sint dicta molestiae doloribus delectus dolor obcaecati amet nemo ratione suscipit a, tempore doloremque dolorem!
          </p>

        </TimelineItem>
      </Timeline>
    </div>
  )
}

export default about
