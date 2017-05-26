package com.yondu.rush.model;

import javax.persistence.*;

/** @Author fsociety
 *
 */
@Entity
@Table(name = "role")
public class Role {

    @GeneratedValue(strategy = GenerationType.AUTO)
    @Id
    private long id;

    private String name;


    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
