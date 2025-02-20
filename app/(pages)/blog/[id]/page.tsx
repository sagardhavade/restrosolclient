"use client"
import React from 'react';
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import Clients_details from '../../common/clients_details';
import './style/style.css';
import Link from 'next/link';
import frame from '@/public/images/bg.png';
import Image from 'next/image';
import left_arrow from '@/public/images/left-chevron.svg';
import comment from '@/public/images/Vector3.svg';
import comments from '@/public/images/Groupss.svg';
import view from '@/public/images/user.svg';
import share from '@/public/images/share.svg';
import calender from '@/public/images/calendar1.svg';
import frame3 from '@/public/images/Image.svg';
import Comments from './comments';


import { getBlogById } from '@/app/api/blog/pageApi';
interface Blog {
  id: string;
  _id: string;
  category: string;
  title: string;
  sectionDecription: string;
  section1Title: string;
  section1Decription: string;
  section2Title: string;
  section2Decription: string;
  section3Title: string;
  section3Decription: string;
  section4Title: string;
  section4Decription: string;
  sectionImage: string;
  date: string;
  __v: number;
  points: string[];
}

function details() {
  const params = useParams();
  const id = params?.id as string; // Ensure `id` is a string
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  console.log(id);
  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      try {
        setLoading(true);
        const blogRes = await getBlogById(id);
        setBlog(blogRes); // ✅ Now blogRes is assigned correctly
      } catch (err) {
        console.error("Error fetching blog:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) return <p>Loading...</p>;
  if (!blog) return <p>No blog found</p>;

  return (
    <>
      <div className="section1400">
        <div className="blogs_redirection">
          <Link href="/blog" className="blogs_previous">
            <Image src={left_arrow} alt="Logo" width={20} height={20} />
            &nbsp; Back to Blogs
          </Link>
          <div className="blogs_top_title">{blog.title}</div>
        </div>
        <div className="blogs_banner">
          <Image src={frame} alt="Logo" width={1440} height={500} />
          <div className="share">
            <div className="share_box">
              <div className="updated_date">
                <Image src={calender} alt="Logo" width={20} height={20} />
                &nbsp;&nbsp;{blog.date && new Date(blog.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric'
                })}

              </div>
              <div className="comments">
                <Image src={comments} alt="Logo" width={20} height={20} />
                &nbsp;&nbsp;6 Comments
              </div>
              <div className="view">
                <Image src={view} alt="Logo" width={20} height={20} />
                &nbsp;&nbsp;45 Views
              </div>
            </div>
            <Link href="#" className="share-button">
              <div className="share_icon">
                <Image src={share} alt="Logo" width={20} height={20} />
                &nbsp;&nbsp;Share
              </div>
            </Link>
          </div>
        </div>
        <div className="details_section">
          <div className="details_title">{blog.section1Title}</div>
          <div className="details_paragraph_card">
           {blog.section1Decription}
          </div>
          {/* <div className="details_paragraph_card">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in non proident, sunt in culpa qui officia
            deserunt mollit anim id est laborum
          </div> */}

          <div className="details_card">
            <div>
              <div className="details_title_card">{blog.section2Title}</div>
              <div className="details_paragraph_card">
              {blog.section2Decription}
              </div>
            </div>
            <div>
              <div className="details_title_card">{blog.section2Title}</div>
              <div className="details_paragraph_card">
              {blog.section3Decription}
              </div>
            </div>
          </div>
          {/* <div className="details">
            <div className="details_title">Step for Beginners</div>
            <div className="details_paragraph_card">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in
            </div>
            <div className="details_paragraph_card">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
              ea commodo consequat. Duis aute irure dolor in reprehenderit in non proident, sunt in culpa qui officia
              deserunt mollit anim id est laborum
            </div>
          </div> */}
          <div className="about_section_card2">
            {/* <Clients_details /> */}
            <Clients_details
  sectionImage={blog.sectionImage}
  points={blog.points}
  sectionDescription={blog.sectionDecription}
/>

          </div>
          <div className="details">
            <div className="details_title">{blog.section4Title}</div>
            <div className="details_paragraph_card">
            
            </div>
            <div className="details_paragraph_card">
            {blog.section4Decription}
            </div>
          </div>
          <div className="comment_share">
            <Link href="#comments" className="share-button">
              <div className="share_icon">
                <Image src={comment} alt="Logo" width={20} height={20} />
                &nbsp;&nbsp;Comments
              </div>
            </Link>
            <Link href="#" className="share-button">
              <div className="share_icon">
                <Image src={share} alt="Logo" width={20} height={20} />
                &nbsp;&nbsp;Share
              </div>
            </Link>
          </div>
          <div className="blogs_underline"></div>
          <div className="blogs_latest_section">
            <div className="blogs_latest_article">Related articles</div>
          </div>
          <div className="blogs_underline"></div>
          <div className="blogs_card_container">
            {[1, 2, 3].map((item, i) => (
              <Link
                href="/blog/How Can a Restaurant Consultant Help Improve Menu Development?"
                className="image_category_card"
                key={i}
              >
                <div className="image_category_img">
                  <Image src={frame3} alt="Logo" width={66} height={66} />
                </div>
                <div className="image_category_text">
                  <div className="image_title">How Can a Restaurant Consultant Help Improve Menu Development?</div>
                  <div className="image_paragraph">
                    Lorem ipsum dolor sit amet consectoli tur adipiscing elit semper dalar.
                  </div>
                  <div className="bottom_line"></div>
                  <div className="category_bottom">
                    <div className="category_blog">Category</div>
                    <div className="category_blog">Jan 22, 2024</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="blogs_latest_section" id="comments">
            <div className="blogs_latest_article">Comments</div>
            <div className="comments_underline"></div>
            <Comments />
          </div>
        </div>
        <div className="quiry">Hello! If you have some questions, then you can just write an email to us ;)</div>
      </div>
      ;
    </>
  );
}

export default details;
