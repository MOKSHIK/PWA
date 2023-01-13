module.exports = targets => {
    targets.of('@magento/venia-ui').routes.tap(routes => {
        routes.push({
            name: 'product-inquiry',
            pattern: '/employee.html',
            path: require.resolve('@ascendlearning/employee/src/emp')
        });
        return routes;
    });
    targets.of('@magento/venia-ui').routes.tap(routes => {
        routes.push({
            name: 'product-inquiry',
            pattern: '/employee.html/adduser.html',
            path: require.resolve('@ascendlearning/employee/src/adduser')
        });
        return routes;
    });
    targets.of('@magento/pwa-buildpack').specialFeatures.tap(flags => {
        flags['@ascendlearning/employee'] = {
            esModules: true,
            cssModules: true,
            graphqlQueries: true
        };
    });
};
