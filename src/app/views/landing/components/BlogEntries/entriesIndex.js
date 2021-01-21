import React from 'react'
import {EntriesContainer, EntriesH1, EntriesWrapper, EntriesCard, EntriesIcon,
EntriesH2,EntriesP} from './entriesElements'
import {blogs} from '../InfoSection/Data';
import BlogEntriesCards from './blogEntries'
import img from '../../../../../assets/images/schedule.svg'

export const BlogEntries = () => {
    return (
        <EntriesContainer id="blog_ent">
            <EntriesH1>Últimas entradas del blog</EntriesH1>
            <EntriesWrapper>
                {/**{blogs.map((blog, i) => (
                    <EntriesCard key={i}>
                        <EntriesIcon src={blog.img} />
                        <EntriesH2>{blog.title}</EntriesH2>
                        <EntriesP>{blog.body.slice(0,40)}</EntriesP>
                    </EntriesCard>
                ))}*/}
                <BlogEntriesCards />
            </EntriesWrapper> 
            
        </EntriesContainer>
    )
}
export default BlogEntries;