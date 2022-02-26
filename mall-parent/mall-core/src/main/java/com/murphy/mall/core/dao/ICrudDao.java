package com.murphy.mall.core.dao;

import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import com.murphy.mall.core.po.BaseEntity;

import java.util.List;

/**
 * 基类Dao
 * @author murphy
 */
public interface ICrudDao<T extends BaseEntity> extends BaseMapper<T> {

    /**
     * 一般要是用动态sql语句查询
     * @param entity
     * @return
     */
    public List<T> selectByPage(T entity);

}
