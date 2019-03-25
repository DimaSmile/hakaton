FROM php:7.2-apache

RUN apt-get update && apt-get upgrade -y && apt-get install -y \
      procps \
      make \ 
      nano \
      gnupg2 \
      unzip \
      libicu-dev \
      zlib1g-dev \
      libxml2 \
      libxml2-dev \
      libreadline-dev \
      supervisor \
      cron \
      libzip-dev \
      libfreetype6-dev \
      libjpeg62-turbo-dev \
      libmcrypt-dev \
      libpng-dev \
      libxslt-dev \
    && docker-php-ext-configure pdo_mysql --with-pdo-mysql=mysqlnd \
    && docker-php-ext-configure gd --with-freetype-dir=/usr/include/ --with-jpeg-dir=/usr/include/ \
    && docker-php-ext-install \
      -j$(nproc) gd \
      pdo_mysql \
      intl \
      bcmath \
      soap \
      xsl \
      zip && \
      rm -fr /tmp/* && \
      rm -rf /var/list/apt/* && \
      rm -r /var/lib/apt/lists/* && \
      apt-get clean

# Install git
WORKDIR /var/www/html/
#RUN apt-get update \
#    && apt-get -y install git \
#    && apt-get clean; rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/* /usr/share/doc/*


# apache configuration document root
# ENV APACHE_DOCUMENT_ROOT=/var/www/html/public
# RUN sed -ri -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/sites-available/*.conf
# RUN sed -ri -e 's!/var/www/!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/apache2.conf /etc/apache2/conf-available/*.conf
COPY ./000-default.conf /etc/apache2/sites-available/000-default.conf
RUN chown -R www-data:www-data /var/www/html && a2enmod rewrite

# install composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# install node js
# Fix debconf warnings upon build
# ARG DEBIAN_FRONTEND=noninteractive
# RUN curl -sL https://deb.nodesource.com/setup_10.x | bash -
# RUN apt-get install -y nodejs

# RUN apt-get install -y gcc g++ build-essential
# RUN apt install -y build-essential libssl-dev
# confirm installation
# RUN node -v
# RUN npm -v

# Use latest npm
# RUN npm i npm@latest -g