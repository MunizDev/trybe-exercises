import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { getPostsBySubreddit } from '../services/redditAPI';

const Context = createContext();
const { Provider } = Context;

function RedditProvider({ children }) {
  const initialState = {
    frontend: {},
    reactjs: {},
  };

  const [postsBySubreddit, setPostsBySubreddit] = useState(initialState);

  const [selectedSubreddit, setSelectedSubreddit] = useState('reactjs');

  const [shouldRefreshSubreddit, setShouldRefreshSubreddit] = useState(false);

  const [isFetching, setIsFetching] = useState(false);

  const fetchPosts = () => {
    if (!shouldFetchPosts()) return;
    setShouldRefreshSubreddit(false);
    setIsFetching(true);
    getPostsBySubreddit(selectedSubreddit).then(
      handleFetchSuccess,
      handleFetchError,
    );
  };

  useEffect(fetchPosts, [selectedSubreddit]);

  useEffect(() => {
    shouldRefreshSubreddit && fetchPosts();
  }, [shouldRefreshSubreddit]);

  const shouldFetchPosts = () => {
    const posts = postsBySubreddit[selectedSubreddit];

    if (!posts.items) return true;
    if (isFetching) return false;
    return shouldRefreshSubreddit;
  };

  const handleFetchSuccess = (json) => {
    const lastUpdated = Date.now();
    const items = json.data.children.map((child) => child.data);

    setShouldRefreshSubreddit(false);
    setIsFetching(false);

    setPostsBySubreddit({
      ...postsBySubreddit,
      [selectedSubreddit]: {
        items,
        lastUpdated,
      },
    });
  };

  const handleFetchError = (error) => {
    setShouldRefreshSubreddit(false);
    setIsFetching(false);

    setPostsBySubreddit({
      ...postsBySubreddit,
      [selectedSubreddit]: {
        error: error.message,
        items: [],
      },
    });
  };

  const handleSubredditChange = (selectedSubreddit) => {
    setSelectedSubreddit(selectedSubreddit);
  };

  const handleRefreshSubreddit = () => {
    setShouldRefreshSubreddit(true);
  };

  const context = {
    postsBySubreddit,
    selectedSubreddit,
    isFetching,
    selectSubreddit: handleSubredditChange,
    fetchPosts: fetchPosts,
    refreshSubreddit: handleRefreshSubreddit,
    availableSubreddits: Object.keys(postsBySubreddit),
    posts: postsBySubreddit[selectedSubreddit].items,
  };

  return <Provider value={context}>{children}</Provider>;
}

RedditProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { RedditProvider as Provider, Context };
