import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import rehypeSlug from 'rehype-slug';

function ToDoGrading() {
    const [markdownContent, setMarkdownContent] = useState('');
    const [tocItems, setTocItems] = useState([]);

    useEffect(() => {
        fetch('/HowToUploadGrades.md')
            .then((response) => response.text())
            .then((text) => {
                setMarkdownContent(text);
                const headings = extractHeadings(text);
                setTocItems(headings);
            })
            .catch((error) => console.error('Error fetching Markdown file:', error));
    }, []);

    const extractHeadings = (markdown) => {
        const headings = [];
        const lines = markdown.split('\n');
        
        lines.forEach(line => {
            const match = line.match(/^(#{1,2})\s+(.+)$/);
            if (match) {
                const level = match[1].length;
                const text = match[2].trim().replace(/\.$/, '');
                const id = slugify(text);
                headings.push({ text, id, level });
            }
        });
        
        return headings;
    };

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const headerHeight = document.querySelector('.header')?.offsetHeight || 0;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerHeight - 20; // 20px extra padding
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    const renderTocItems = (items) => {
        return (
            <ul className="toc-list">
                {items.map((item, index) => (
                    <li key={index} className={`toc-item level-${item.level}`}>
                        <a 
                            href={`#${item.id}`}
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection(item.id);
                            }}
                        >
                            {item.text}
                        </a>
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <div className="todo-grading-page">
            <div className="sidebar">
                <h2>Table of Contents</h2>
                {tocItems.length > 0 && renderTocItems(tocItems)}
            </div>

            <div className="content">
                <ReactMarkdown
                    rehypePlugins={[rehypeSlug]}
                    components={{
                        h1: ({node, ...props}) => {
                            const text = props.children[0];
                            return <h1 id={slugify(text)} className="content-heading" {...props} />;
                        },
                        h2: ({node, ...props}) => {
                            const text = props.children[0];
                            return <h2 id={slugify(text)} className="content-heading" {...props} />;
                        }
                    }}
                >
                    {markdownContent}
                </ReactMarkdown>
            </div>
        </div>
    );
}

function slugify(text) {
    return text
        .toString()
        .toLowerCase()
        .replace(/\s+/g, '-')
        .replace(/[^\w-]+/g, '')
        .replace(/--+/g, '-')
        .replace(/^-+/, '')
        .replace(/-+$/, '')
        .replace(/\./g, '');
}

export default ToDoGrading;
