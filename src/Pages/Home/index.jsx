import React, { memo, useState, useEffect } from 'react';
import { Row, Col, } from 'antd';
import api from '../../services/api';
import Economy from './components/Economy';
import Technology from './components/Technology';
import World from './components/World';

function Home() {

    const [news, setNews] = useState([]);

    const handleNews = (articles) => {
        setNews({
            world: articles[0]?.value.value,
            economy: articles[1]?.value.value,
            technology: articles[2]?.value.value
        })
    }

    useEffect(() => {
        Promise.allSettled([
            api.getNews('world'),
            api.getNews('economy'),
            api.getNews('technology')
        ]).then(handleNews)
    }, [])

    return (
        <div>
            <Row gutter={[16, 16]}>
                <Col span={24} md={16}>
                    <h2>World</h2>
                    <World values={news?.world} />
                </Col>
            </Row>
            <hr />
            <Row gutter={[16, 16]}>
                <Col span={24} md={8}>
                    <h2>Economy</h2>
                    <Economy values={news?.economy} />
                </Col>
            </Row>
            <hr />
            <Row gutter={[16, 16]}>
                <Col span={24}>
                    <h2>Technology</h2>
                    <Technology values={news?.technology} />
                </Col>
            </Row>
        </div>
    )
}

export default memo(Home);